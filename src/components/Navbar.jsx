import {
    AppBar,
    Avatar,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import SidebarWidth from "../data/SideBarWidth";
import {
    Menu as MenuIcon,
    NotificationsOutlined as NotificationsOutlinedIcon,
    WbSunnyOutlined as WbSunnyOutlinedIcon,
    MoreVertOutlined as MoreVertOutlinedIcon,
} from "@mui/icons-material";
import { useContext, useState } from "react";
import { DrawerContext } from "../context/DrawerContext";

const drawerWidth = SidebarWidth;

const Navbar = () => {
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const isOpenMenu = Boolean(menuAnchorEl);
    const [, setIsOpenSidebar] = useContext(DrawerContext);
    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    mr: { md: `${drawerWidth}px` },
                    bgcolor: "#fff",
                    color: "text.primary",
                }}
            >
                <Menu
                    anchorEl={menuAnchorEl}
                    sx={{ "& ul": { padding: 0 } }}
                    open={isOpenMenu}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    onClose={() => {
                        setMenuAnchorEl(null);
                    }}
                >
                    <MenuItem sx={{ gap: "5px" }}>
                        <NotificationsOutlinedIcon fontSize="small" color="primary" />
                        <Typography>اعلانات</Typography>
                    </MenuItem>
                    <MenuItem sx={{ gap: "5px" }}>
                        <WbSunnyOutlinedIcon fontSize="small" color="primary" />
                        <Typography>تم</Typography>
                    </MenuItem>
                </Menu>
                <Toolbar>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            gap: "10px",
                        }}
                    >
                        <IconButton
                            color="primary"
                            onClick={(e) => setMenuAnchorEl(e.currentTarget)}
                            sx={{ display: { xs: "flex", md: "none" } }}
                        >
                            <MoreVertOutlinedIcon />
                        </IconButton>

                        <Box
                            sx={{
                                display: { xs: "none", md: "flex" },
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 2,
                                flexShrink: 0,
                            }}
                        >
                            <Avatar
                                src="./images/person/01.jpg"
                                sx={{ width: "50px", height: "50px" }}
                            />
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "flex-start",
                                    flexDirection: "column",
                                }}
                            >
                                <Typography component="h4" variant="h4">
                                    محمدامین سعیدی راد
                                </Typography>
                                <Typography sx={{ color: "grey.500" }}>
                                    برنامه نویس فرانت اند
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                p: "5px",
                                boxShadow: (theme) => theme.shadows[2],
                                borderRadius: "4px",
                                width: "350px",
                                maxWidth: "100%",
                            }}
                        >
                            <Box
                                component="input"
                                placeholder="جست و جو کنید..."
                                sx={{
                                    height: "100%",
                                    border: "none",
                                    outline: "none",
                                    width: "100%",
                                    fontSize: "16px",
                                }}
                            />
                            <Button
                                variant="contained"
                                size="small"
                                sx={{ minWidth: "fit-content" }}
                            >
                                جست و جو کنید
                            </Button>
                        </Box>
                        <Box flexShrink={0}>
                            <Box sx={{ display: { xs: "none", md: "block" } }}>
                                <IconButton color="primary">
                                    <NotificationsOutlinedIcon />
                                </IconButton>
                                <IconButton color="primary">
                                    <WbSunnyOutlinedIcon />
                                </IconButton>
                            </Box>
                            <Box sx={{ display: { xs: "block", md: "none" } }}>
                                <IconButton
                                    color="primary"
                                    onClick={() => setIsOpenSidebar((prev) => !prev)}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
