import { Box } from "@mui/system";
import AddNewProduct from "../components/pages/Products/AddNewProduct";
import ProductsTable from "../components/pages/Products/ProductsTable";
import { useEffect, useState } from "react";

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllProducts = () => {
        fetch("http://localhost:3000/api/products")
            .then((res) => res.json())
            .then((products) => {
                setAllProducts(products);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <Box>
            <AddNewProduct getAllProducts={getAllProducts} />
            <ProductsTable
                allProducts={allProducts}
                getAllProducts={getAllProducts}
                isLoading={isLoading}
            />
        </Box>
    );
};

export default Products;
