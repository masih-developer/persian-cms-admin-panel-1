import { Grid, Typography, Button } from "@mui/material";
import { Box, styled } from "@mui/system";
import {
    DriveFileRenameOutlineOutlined as DriveFileRenameOutlineOutlinedIcon,
    ProductionQuantityLimits as ProductionQuantityLimitsIcon,
    ThumbUpOutlined as ThumbUpOutlinedIcon,
    ColorLensOutlined as ColorLensOutlinedIcon,
    LinkOutlined as LinkOutlinedIcon,
    InsertChartOutlinedRounded as InsertChartOutlinedRoundedIcon,
    AttachMoneyOutlined as AttachMoneyOutlinedIcon,
} from "@mui/icons-material";
import { useState } from "react";

const CustomInput = styled("input")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: "40px",
    border: "none",
    outline: "none",
    padding: "0 5px",
    fontSize: "16px",
    userSelect: "none",
}));
const AddNewProduct = ({ getAllProducts }) => {
    const [newProductTitle, setNewProductTitle] = useState("");
    const [newProductQuantity, setNewProductQuantity] = useState("");
    const [newProductPopularity, setNewProductPopularity] = useState("");
    const [newProductColors, setNewProductColors] = useState("");
    const [newProductPrice, setNewProductPrice] = useState("");
    const [newProductImgAddress, setNewProductImgAddress] = useState("");
    const [newProductSales, setNewProductSales] = useState("");

    const newProductInfos = {
        id: 333,
        title: newProductTitle,
        price: +newProductPrice,
        count: +newProductQuantity,
        img: newProductImgAddress,
        popularity: +newProductPopularity,
        sale: +newProductSales,
        colors: +newProductColors,
    };

    const addNewProductHandler = () => {
        fetch("http://localhost:3000/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProductInfos),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                setNewProductTitle("");
                setNewProductQuantity("");
                setNewProductPopularity("");
                setNewProductColors("");
                setNewProductPrice("");
                setNewProductImgAddress("");
                setNewProductSales("");
                getAllProducts();
            });
    };

    return (
        <Box mb={3}>
            <Typography component="h2" variant="h2" mb={3}>
                افزودن محصول جدید
            </Typography>
            <Box component="form" bgcolor="white" p={3} borderRadius={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Box
                            display="flex"
                            alignItems="center"
                            bgcolor="background.default"
                            borderRadius={1}
                            overflow="hidden"
                            sx={{ ":focus-within": { outline: "2px solid #d0d0d0" } }}
                        >
                            <Box
                                width="40px"
                                height="40px"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                sx={{ borderLeft: "1px solid #d0d0d0" }}
                            >
                                <DriveFileRenameOutlineOutlinedIcon />
                            </Box>
                            <CustomInput
                                placeholder="اسم محصول را بنویسید"
                                value={newProductTitle}
                                onChange={(e) => setNewProductTitle(e.target.value)}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Box
                            display="flex"
                            alignItems="center"
                            bgcolor="background.default"
                            borderRadius={1}
                            overflow="hidden"
                            sx={{ ":focus-within": { outline: "2px solid #d0d0d0" } }}
                        >
                            <Box
                                sx={{ borderLeft: "1px solid #d0d0d0" }}
                                width="40px"
                                height="40px"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <ProductionQuantityLimitsIcon />
                            </Box>
                            <CustomInput
                                placeholder="موجودی محصول را بنویسید"
                                value={newProductQuantity}
                                onChange={(e) => setNewProductQuantity(e.target.value)}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Box
                            display="flex"
                            alignItems="center"
                            bgcolor="background.default"
                            borderRadius={1}
                            overflow="hidden"
                            sx={{ ":focus-within": { outline: "2px solid #d0d0d0" } }}
                        >
                            <Box
                                sx={{ borderLeft: "1px solid #d0d0d0" }}
                                width="40px"
                                height="40px"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <ThumbUpOutlinedIcon />
                            </Box>
                            <CustomInput
                                placeholder="میزان محبوبیت محصول را بنویسید"
                                value={newProductPopularity}
                                onChange={(e) => setNewProductPopularity(e.target.value)}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Box
                            display="flex"
                            alignItems="center"
                            bgcolor="background.default"
                            borderRadius={1}
                            overflow="hidden"
                            sx={{ ":focus-within": { outline: "2px solid #d0d0d0" } }}
                        >
                            <Box
                                sx={{ borderLeft: "1px solid #d0d0d0" }}
                                width="40px"
                                height="40px"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <ColorLensOutlinedIcon />
                            </Box>
                            <CustomInput
                                placeholder="تعداد رنگ بندی محصول را بنویسید"
                                value={newProductColors}
                                onChange={(e) => setNewProductColors(e.target.value)}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Box
                            display="flex"
                            alignItems="center"
                            bgcolor="background.default"
                            borderRadius={1}
                            overflow="hidden"
                            sx={{ ":focus-within": { outline: "2px solid #d0d0d0" } }}
                        >
                            <Box
                                sx={{ borderLeft: "1px solid #d0d0d0" }}
                                width="40px"
                                height="40px"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <AttachMoneyOutlinedIcon />
                            </Box>
                            <CustomInput
                                placeholder="قیمت محصول را بنویسید"
                                value={newProductPrice}
                                onChange={(e) => setNewProductPrice(e.target.value)}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Box
                            display="flex"
                            alignItems="center"
                            bgcolor="background.default"
                            borderRadius={1}
                            overflow="hidden"
                            sx={{ ":focus-within": { outline: "2px solid #d0d0d0" } }}
                        >
                            <Box
                                sx={{ borderLeft: "1px solid #d0d0d0" }}
                                width="40px"
                                height="40px"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <LinkOutlinedIcon />
                            </Box>
                            <CustomInput
                                sx={{ direction: "ltr", textAlign: "right" }}
                                placeholder="آدرس عکس محصول را بنویسید"
                                value={newProductImgAddress}
                                onChange={(e) => setNewProductImgAddress(e.target.value)}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <Box
                            display="flex"
                            alignItems="center"
                            bgcolor="background.default"
                            borderRadius={1}
                            overflow="hidden"
                            sx={{ ":focus-within": { outline: "2px solid #d0d0d0" } }}
                        >
                            <Box
                                sx={{ borderLeft: "1px solid #d0d0d0" }}
                                width="40px"
                                height="40px"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <InsertChartOutlinedRoundedIcon />
                            </Box>
                            <CustomInput
                                placeholder="میزان فروش محصول را بنویسید"
                                value={newProductSales}
                                onChange={(e) => setNewProductSales(e.target.value)}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            sx={{
                                width: "fit-content",
                                mr: "auto",
                                display: "block",
                                fontSize: { md: "18px" },
                            }}
                            onClick={addNewProductHandler}
                        >
                            ثبت محصول
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default AddNewProduct;
