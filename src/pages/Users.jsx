import {
    Box,
    Button,
    CircularProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import DeleteModal from "../components/common/DeleteModal";
import ErrorMsgBox from "../components/common/ErrorMsgBox";

const Users = () => {
    const [allUsers, setAllusers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [mainUserID, setMainUserID] = useState(null);

    const getAllUsers = () => {
        fetch("http://localhost:3000/api/users")
            .then((res) => res.json())
            .then((users) => {
                setAllusers(users);
            })
            .catch((err) => console.error(err))
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserHandler = () => {
        fetch(`http://localhost:3000/api/users/${mainUserID}`, { method: "DELETE" })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                getAllUsers();
                setIsOpenDeleteModal(false);
            });
    };

    if (isLoading) {
        return <CircularProgress sx={{ display: "block", mx: "auto" }} size={50} />;
    }

    if (allUsers.length) {
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
                                {[
                                    "نام و نام خانوادگی",
                                    "نام کاربری",
                                    "رمز عبور",
                                    "شماره تماس",
                                    "ایمیل",
                                    "",
                                ].map((item) => (
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
                            {allUsers.map((user) => (
                                <TableRow
                                    key={user.id}
                                    sx={{
                                        "&:last-child td, &:last-child th": { border: 0 },
                                    }}
                                >
                                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                                        {user.firstname} {user.lastname}
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                                        {user.username}
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                                        {user.password}
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                                        {user.phone}
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                                        {user.email}
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                                        <Box
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                            gap={1}
                                        >
                                            <Button variant="contained" color="primary">
                                                جزئیات
                                            </Button>
                                            <Button variant="contained" color="warning">
                                                ویرایش
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="error"
                                                onClick={() => {
                                                    setMainUserID(user.id);
                                                    setIsOpenDeleteModal(true);
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
                <DeleteModal
                    title="آیا از حذف این کاربر مطمئن هستید؟"
                    isOpen={isOpenDeleteModal}
                    onClose={() => setIsOpenDeleteModal(false)}
                    submitAction={deleteUserHandler}
                    cancelAction={() => setIsOpenDeleteModal(false)}
                />
            </Box>
        );
    }

    return <ErrorMsgBox errMsg="هیچ کاربری یافت نشد." />;
};

export default Users;
