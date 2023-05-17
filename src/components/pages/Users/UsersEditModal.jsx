import { Box, Button, Modal, Typography, styled } from "@mui/material";

import {
    DriveFileRenameOutline as DriveFileRenameOutlineIcon,
    AlternateEmail as AlternateEmailIcon,
    LockOutlined as LockOutlinedIcon,
    LocalPhoneOutlined as LocalPhoneOutlinedIcon,
    LocationCityOutlined as LocationCityOutlinedIcon,
    AttachEmailOutlined as AttachEmailOutlinedIcon,
    HomeOutlined as HomeOutlinedIcon,
    ScoreboardOutlined as ScoreboardOutlinedIcon,
    ShoppingCartOutlined as ShoppingCartOutlinedIcon,
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

const UsersEditModal = ({ mainUser, open, onClose, onSubmit }) => {
    const [newUserFirstname, setNewUserFirstname] = useState("");
    const [newUserLastname, setNewUserLastname] = useState("");
    const [newUserUsername, setNewUserUsername] = useState("");
    const [newUserPassword, setNewUserPassword] = useState("");
    const [newUserPhoneNumber, setNewUserPhoneNumber] = useState("");
    const [newUserCity, setNewUserCity] = useState("");
    const [newUserEmail, setNewUserEmail] = useState("");
    const [newUserAddress, setNewUserAddress] = useState("");
    const [newUserScore, setNewUserScore] = useState("");
    const [newUserBuy, setNewUserBuy] = useState("");

    useEffect(() => {
        setNewUserFirstname(mainUser.firstname);
        setNewUserLastname(mainUser.lastname);
        setNewUserUsername(mainUser.username);
        setNewUserPassword(mainUser.password);
        setNewUserPhoneNumber(mainUser.phone);
        setNewUserCity(mainUser.city);
        setNewUserEmail(mainUser.email);
        setNewUserAddress(mainUser.address);
        setNewUserScore(mainUser.score);
        setNewUserBuy(mainUser.buy);
    }, [mainUser]);

    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            <Box
                bgcolor="white"
                p={3}
                borderRadius={1}
                sx={{ maxHeight: "70vh", overflowY: "auto" }}
            >
                <Typography component="h3" variant="h3" textAlign="center" mb={3}>
                    ویرایش اطلاعات کاربر:
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
                            <DriveFileRenameOutlineIcon />
                        </Box>
                        <CustomInput
                            placeholder="نام"
                            value={newUserFirstname}
                            onChange={(e) => setNewUserFirstname(e.target.value)}
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
                            <DriveFileRenameOutlineIcon />
                        </Box>
                        <CustomInput
                            placeholder="نام خانوادگی"
                            value={newUserLastname}
                            onChange={(e) => setNewUserLastname(e.target.value)}
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
                            <AlternateEmailIcon />
                        </Box>
                        <CustomInput
                            placeholder="نام کاربری"
                            value={newUserUsername}
                            onChange={(e) => setNewUserUsername(e.target.value)}
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
                            <LockOutlinedIcon />
                        </Box>
                        <CustomInput
                            placeholder="رمز عبور"
                            value={newUserPassword}
                            onChange={(e) => setNewUserPassword(e.target.value)}
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
                            <LocalPhoneOutlinedIcon />
                        </Box>
                        <CustomInput
                            placeholder="شماره تلفن"
                            value={newUserPhoneNumber}
                            onChange={(e) => setNewUserPhoneNumber(e.target.value)}
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
                            <LocationCityOutlinedIcon />
                        </Box>
                        <CustomInput
                            placeholder="شهر"
                            value={newUserCity}
                            onChange={(e) => setNewUserCity(e.target.value)}
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
                            <AttachEmailOutlinedIcon />
                        </Box>
                        <CustomInput
                            placeholder="ایمیل"
                            value={newUserEmail}
                            onChange={(e) => setNewUserEmail(e.target.value)}
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
                            <HomeOutlinedIcon />
                        </Box>
                        <CustomInput
                            placeholder="آدرس محل سکونت"
                            value={newUserAddress}
                            onChange={(e) => setNewUserAddress(e.target.value)}
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
                            <ScoreboardOutlinedIcon />
                        </Box>
                        <CustomInput
                            placeholder="امتیاز"
                            value={newUserScore}
                            onChange={(e) => setNewUserScore(e.target.value)}
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
                            <ShoppingCartOutlinedIcon />
                        </Box>
                        <CustomInput
                            placeholder="میزان خرید"
                            value={newUserBuy}
                            onChange={(e) => setNewUserBuy(e.target.value)}
                        />
                    </Box>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ width: "100%" }}
                        onClick={() =>
                            onSubmit({
                                firstname: newUserFirstname,
                                lastname: newUserLastname,
                                username: newUserUsername,
                                password: newUserPassword,
                                phone: newUserPhoneNumber,
                                city: newUserCity,
                                email: newUserEmail,
                                address: newUserAddress,
                                score: newUserScore,
                                buy: newUserBuy,
                            })
                        }
                    >
                        ثبت اطلاعات جدید
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default UsersEditModal;
