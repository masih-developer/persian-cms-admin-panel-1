import {
    Avatar,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Box,
    Modal,
} from "@mui/material";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import DetailsModal from "./DetailsModal";
import ProductEditModal from "./ProductEditModal";
import ErrorMsgBox from "../../common/ErrorMsgBox";

const ProductsTable = ({ allProducts, getAllProducts }) => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
    const [isShowEditModal, setIsShowEditModal] = useState(false);
    const [productId, setProductId] = useState(null);
    const [mainProductInfo, setMainProductInfo] = useState({});

    const closeAllModals = () => {
        setIsShowModal(false);
        setIsShowDeleteModal(false);
        setIsShowDetailsModal(false);
        setIsShowEditModal(false);
    };

    const editModalHandler = (productInfo) => {
        fetch(`http://localhost:3000/api/products/${productInfo.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productInfo),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                closeAllModals();
                getAllProducts();
            });
    };

    const deleteModalHandler = () => {
        console.log(mainProductInfo);
        fetch(`http://localhost:3000/api/products/${productId}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                closeAllModals();
                getAllProducts();
            });
    };

    return allProducts.length ? (
        <Box p={2} bgcolor="white" borderRadius={3}>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {["عکس", "اسم", "قیمت", "موجودی", ""].map((item) => (
                                <TableCell
                                    align="center"
                                    sx={{ borderBottom: "none", fontSize: "16px" }}
                                    key={item}
                                >
                                    {item}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allProducts.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell align="center" sx={{ borderBottom: "none" }}>
                                    <Avatar
                                        src={row.img}
                                        sx={{ width: "100px", height: "100px", mx: "auto" }}
                                    />
                                </TableCell>
                                <TableCell align="center" sx={{ borderBottom: "none" }}>
                                    {row.title}
                                </TableCell>
                                <TableCell align="center" sx={{ borderBottom: "none" }}>
                                    {row.price.toLocaleString()} تومان
                                </TableCell>
                                <TableCell align="center" sx={{ borderBottom: "none" }}>
                                    {row.count}
                                </TableCell>
                                <TableCell align="center" sx={{ borderBottom: "none" }}>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                        gap={1}
                                    >
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => {
                                                setMainProductInfo(row);
                                                setIsShowModal(true);
                                                setIsShowDetailsModal(true);
                                            }}
                                        >
                                            جزییات
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="warning"
                                            onClick={() => {
                                                setMainProductInfo(row);
                                                setIsShowModal(true);
                                                setIsShowEditModal(true);
                                            }}
                                        >
                                            ویرایش
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => {
                                                setMainProductInfo(row);
                                                setProductId(row.id);
                                                setIsShowModal(true);
                                                setIsShowDeleteModal(true);
                                            }}
                                        >
                                            حذف
                                        </Button>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                open={isShowModal}
                onClose={closeAllModals}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <Box sx={{ maxWidth: "100%" }}>
                    {isShowDeleteModal && (
                        <DeleteModal onConfirm={deleteModalHandler} onCancel={closeAllModals} />
                    )}
                    {isShowDetailsModal && <DetailsModal details={mainProductInfo} />}
                    {isShowEditModal && (
                        <ProductEditModal
                            mainProduct={mainProductInfo}
                            onSubmit={editModalHandler}
                        />
                    )}
                </Box>
            </Modal>
        </Box>
    ) : (
        <ErrorMsgBox errMsg="هیچ محصولی یافت نشد." />
    );
};

export default ProductsTable;
