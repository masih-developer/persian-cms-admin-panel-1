import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

const DetailsModal = ({ details }) => {
    return (
        <Box bgcolor="white" p={3} borderRadius={1}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {["اسم", "قیمت", "موجودی"].map((item) => (
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
                        <TableRow>
                            <TableCell align="center" sx={{ borderBottom: "none" }}>
                                {details.title}
                            </TableCell>
                            <TableCell align="center" sx={{ borderBottom: "none" }}>
                                {details.price.toLocaleString()} تومان
                            </TableCell>
                            <TableCell align="center" sx={{ borderBottom: "none" }}>
                                {details.popularity}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default DetailsModal;
