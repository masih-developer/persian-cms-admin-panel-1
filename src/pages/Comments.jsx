import {
    Box,
    Button,
    CircularProgress,
    Modal,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ErrorMsgBox from "../components/common/ErrorMsgBox";

const Comments = () => {
    const [allComments, setAllComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
    const [mainCommentInfo, setMainCommentInfo] = useState("");
    const [mainCommentID, setMainCommentID] = useState(null);

    const getAllComments = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:3000/api/comments");
            const resJson = await response.json();
            setAllComments(resJson);
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getAllComments();
    }, []);

    const deleteCommentHandler = () => {
        fetch(`http://localhost:3000/api/comments/${mainCommentID}`, { method: "DELETE" })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setIsShowDeleteModal(false);
                getAllComments();
            });
    };

    if (isLoading) {
        return <CircularProgress sx={{ mx: "auto", display: "block" }} size={50} />;
    }

    if (allComments.length) {
        return (
            <Box>
                <TableContainer>
                    <Table
                        sx={{
                            bgcolor: "white",
                            borderRadius: 3,
                            "& .MuiTableRow-root, & .MuiTableCell-root": {
                                whiteSpace: "nowrap",
                            },
                        }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                {["اسم کاربر", "محصول", "کامنت", "تاریخ", "ساعت", ""].map(
                                    (item) => (
                                        <TableCell
                                            align="center"
                                            sx={{ borderBottom: "none", fontSize: "16px" }}
                                            key={item}
                                        >
                                            {item}
                                        </TableCell>
                                    )
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allComments.map((comment) => (
                                <TableRow
                                    key={comment.id}
                                    sx={{
                                        "&:last-child td, &:last-child th": { border: 0 },
                                    }}
                                >
                                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                                        {comment.userID}
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                                        {comment.productID}
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            sx={{ minWidth: "fit-content" }}
                                            onClick={() => {
                                                setIsShowDetailsModal(true);
                                                setMainCommentInfo(comment.body);
                                            }}
                                        >
                                            دیدن متن
                                        </Button>
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                                        {comment.date}
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                                        {comment.hour}
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                                        <Box
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                            gap={1}
                                        >
                                            <Button variant="contained" color="info">
                                                پاسخ
                                            </Button>
                                            <Button variant="contained" color="warning">
                                                ویرایش
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="error"
                                                sx={{ bgcolor: "error.light" }}
                                            >
                                                رد
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="error"
                                                onClick={() => {
                                                    setMainCommentID(comment.id);
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
                    onClose={() => setIsShowDetailsModal(false)}
                    open={isShowDetailsModal}
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <Box bgcolor="white" borderRadius={1} p={3}>
                        <Typography mb={3} variant="h4">
                            {mainCommentInfo}
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ mx: "auto", width: "fit-content", display: "block" }}
                            onClick={() => setIsShowDetailsModal(false)}
                        >
                            بستن
                        </Button>
                    </Box>
                </Modal>
                <Modal
                    onClose={() => setIsShowDeleteModal(false)}
                    open={isShowDeleteModal}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box bgcolor="white" borderRadius={1} p={3}>
                        <Typography component="h3" variant="h3" mb={4}>
                            آیا از حذف این محصول مطمئن هستید؟
                        </Typography>
                        <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
                            <Button
                                variant="outlined"
                                color="primary"
                                size="large"
                                onClick={() => deleteCommentHandler()}
                            >
                                بله
                            </Button>
                            <Button
                                variant="contained"
                                color="error"
                                size="large"
                                onClick={() => setIsShowDeleteModal(false)}
                            >
                                خیر
                            </Button>
                        </Box>
                    </Box>
                </Modal>
            </Box>
        );
    }

    return <ErrorMsgBox errMsg="هیچ کامنتی یافت نشد." />;
};

export default Comments;
