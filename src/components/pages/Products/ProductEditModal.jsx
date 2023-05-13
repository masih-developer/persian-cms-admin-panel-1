import { Box, Button, Typography, styled } from "@mui/material";
import {
    FormatItalicOutlined as FormatItalicOutlinedIcon,
    ShoppingBagOutlined as ShoppingBagOutlinedIcon,
    InsertPhotoOutlined as InsertPhotoOutlinedIcon,
    AttachMoneyOutlined as AttachMoneyOutlinedIcon,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

const CustomInput = styled("input")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    width: "300px",
    height: "40px",
    border: "none",
    outline: "none",
    paddingLeft: "10px",
    fontSize: "16px",
    userSelect: "none",
}));

const ProductEditModal = ({ mainProduct, onSubmit }) => {
    const [productNewTitle, setProductNewTitle] = useState("");
    const [productNewPrice, setProductNewPrice] = useState("");
    const [productNewCount, setProductNewCount] = useState("");
    const [productNewImg, setProductNewImg] = useState("");
    const [productNewPopularity, setProductNewPopularity] = useState("");
    const [productNewSale, setProductNewSale] = useState("");
    const [productNewColors, setProductNewColors] = useState("");

    useEffect(() => {
        setProductNewTitle(mainProduct.title);
        setProductNewPrice(mainProduct.price);
        setProductNewCount(mainProduct.count);
        setProductNewImg(mainProduct.img);
        setProductNewPopularity(mainProduct.popularity);
        setProductNewSale(mainProduct.sale);
        setProductNewColors(mainProduct.colors);
    }, [mainProduct]);

    return (
        <Box bgcolor="white" p={3} borderRadius={1}>
            <Typography component="h3" variant="h3" textAlign="center" mb={3}>
                ویرایش محصول:
            </Typography>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                gap={2}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    bgcolor="background.default"
                    borderRadius={1}
                    overflow="hidden"
                    sx={{ ":focus-within": { outline: "2px solid #d0d0d0" }, maxWidth: "100%" }}
                >
                    <Box
                        width="40px"
                        height="40px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <FormatItalicOutlinedIcon />
                    </Box>
                    <CustomInput
                        placeholder="عنوان جدید را وارد کنید..."
                        value={productNewTitle}
                        onChange={(e) => setProductNewTitle(e.target.value)}
                    />
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    bgcolor="background.default"
                    borderRadius={1}
                    overflow="hidden"
                    sx={{ ":focus-within": { outline: "2px solid #d0d0d0" }, maxWidth: "100%" }}
                >
                    <Box
                        width="40px"
                        height="40px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <AttachMoneyOutlinedIcon />
                    </Box>
                    <CustomInput
                        placeholder="قیمت جدید را وارد کنید..."
                        value={productNewPrice}
                        onChange={(e) => setProductNewPrice(e.target.value)}
                    />
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    bgcolor="background.default"
                    borderRadius={1}
                    overflow="hidden"
                    sx={{ ":focus-within": { outline: "2px solid #d0d0d0" }, maxWidth: "100%" }}
                >
                    <Box
                        width="40px"
                        height="40px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <AttachMoneyOutlinedIcon />
                    </Box>
                    <CustomInput
                        placeholder="موجودی جدید را وارد کنید..."
                        value={productNewCount}
                        onChange={(e) => setProductNewCount(e.target.value)}
                    />
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    bgcolor="background.default"
                    borderRadius={1}
                    overflow="hidden"
                    sx={{ ":focus-within": { outline: "2px solid #d0d0d0" }, maxWidth: "100%" }}
                >
                    <Box
                        width="40px"
                        height="40px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <FormatItalicOutlinedIcon />
                    </Box>
                    <CustomInput
                        sx={{ direction: "ltr" }}
                        placeholder="آدرس کاور جدید را وارد کنید..."
                        value={productNewImg}
                        onChange={(e) => setProductNewImg(e.target.value)}
                    />
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    bgcolor="background.default"
                    borderRadius={1}
                    overflow="hidden"
                    sx={{ ":focus-within": { outline: "2px solid #d0d0d0" }, maxWidth: "100%" }}
                >
                    <Box
                        width="40px"
                        height="40px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <FormatItalicOutlinedIcon />
                    </Box>
                    <CustomInput
                        placeholder="میزان محبوبیت جدید را وارد کنید..."
                        value={productNewPopularity}
                        onChange={(e) => setProductNewPopularity(e.target.value)}
                    />
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    bgcolor="background.default"
                    borderRadius={1}
                    overflow="hidden"
                    sx={{ ":focus-within": { outline: "2px solid #d0d0d0" }, maxWidth: "100%" }}
                >
                    <Box
                        width="40px"
                        height="40px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <ShoppingBagOutlinedIcon />
                    </Box>
                    <CustomInput
                        placeholder="میزان فروش جدید را وارد کنید..."
                        value={productNewSale}
                        onChange={(e) => setProductNewSale(e.target.value)}
                    />
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    bgcolor="background.default"
                    borderRadius={1}
                    overflow="hidden"
                    sx={{ ":focus-within": { outline: "2px solid #d0d0d0" }, maxWidth: "100%" }}
                >
                    <Box
                        width="40px"
                        height="40px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <InsertPhotoOutlinedIcon />
                    </Box>
                    <CustomInput
                        placeholder="تعداد رنگ بندی جدید را وارد کنید..."
                        value={productNewColors}
                        onChange={(e) => setProductNewColors(e.target.value)}
                    />
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ width: "100%" }}
                    onClick={() =>
                        onSubmit({
                            title: productNewTitle,
                            price: parseInt(productNewPrice),
                            count: parseInt(productNewCount),
                            img: productNewImg,
                            popularity: parseInt(productNewPopularity),
                            sale: parseInt(productNewSale),
                            colors: parseInt(productNewColors),
                        })
                    }
                >
                    ثبت اطلاعات جدید
                </Button>
            </Box>
        </Box>
    );
};

export default ProductEditModal;
