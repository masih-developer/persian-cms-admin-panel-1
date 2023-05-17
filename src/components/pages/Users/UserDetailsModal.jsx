import {
    Box,
    Button,
    Modal,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

const UserDetailsModal = ({ open, onClose, mainUseInfo }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box bgcolor="white" p={3} borderRadius={1} maxWidth="100%">
                <TableContainer sx={{ mb: 3 }}>
                    <Table
                        sx={{
                            "& .MuiTableRow-root, & .MuiTableCell-root": {
                                whiteSpace: "nowrap",
                            },
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                {["شهر", "آدرس", "امتیاز", "میزان خرید"].map((item) => (
                                    <TableCell
                                        key={item}
                                        align="center"
                                        sx={{ borderBottom: "none", fontSize: "16px" }}
                                    >
                                        {item}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="center" sx={{ borderBottom: "none" }}>
                                    {mainUseInfo.city}
                                </TableCell>
                                <TableCell align="center" sx={{ borderBottom: "none" }}>
                                    {mainUseInfo.address}
                                </TableCell>
                                <TableCell align="center" sx={{ borderBottom: "none" }}>
                                    {mainUseInfo.score}
                                </TableCell>
                                <TableCell align="center" sx={{ borderBottom: "none" }}>
                                    {mainUseInfo.buy}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onClose}
                    sx={{ display: "block", mx: "auto" }}
                >
                    بستن
                </Button>
            </Box>
        </Modal>
    );
};

export default UserDetailsModal;
