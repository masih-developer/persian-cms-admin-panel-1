import {
    Avatar,
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import {
    Home as HomeIcon,
    InsertCommentOutlined as InsertCommentOutlinedIcon,
    Inventory2Outlined as Inventory2OutlinedIcon,
    GroupOutlined as GroupOutlinedIcon,
    ViewQuiltOutlined as ViewQuiltOutlinedIcon,
    LocalOfferOutlined as LocalOfferOutlinedIcon,
} from "@mui/icons-material";

const SidebarContent = () => {
    return (
        <Box sx={{ direction: "rtl" }}>
            <Toolbar>
                <Typography component="h3" variant="h3" textAlign="center">
                    به داشبورد خوش آمدید
                </Typography>
            </Toolbar>
            <Divider />
            <Toolbar sx={{ display: { xs: "block", md: "none" }, py: "10px" }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 1,
                        flexShrink: 0,
                    }}
                >
                    <Avatar src="./images/person/01.jpg" sx={{ width: "45px", height: "45px" }} />
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
                        <Typography sx={{ color: "grey.500" }}>برنامه نویس فرانت اند</Typography>
                    </Box>
                </Box>
            </Toolbar>
            <Divider />
            <List disablePadding sx={{ mt: "20px" }}>
                <ListItem disableGutters disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: "35px" }}>
                            <HomeIcon sx={{ color: "#fff" }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography textAlign="right" fontSize="20px">
                                    صفحه ی اصلی
                                </Typography>
                            }
                            sx={{ ml: "auto" }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disableGutters disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: "35px" }}>
                            <Inventory2OutlinedIcon sx={{ color: "#fff" }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography textAlign="right" fontSize="20px">
                                    محصولات
                                </Typography>
                            }
                            sx={{ ml: "auto" }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disableGutters disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: "35px" }}>
                            <InsertCommentOutlinedIcon sx={{ color: "#fff" }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography textAlign="right" fontSize="20px">
                                    کامنت ها
                                </Typography>
                            }
                            sx={{ ml: "auto" }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disableGutters disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: "35px" }}>
                            <GroupOutlinedIcon sx={{ color: "#fff" }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography textAlign="right" fontSize="20px">
                                    کاربران
                                </Typography>
                            }
                            sx={{ ml: "auto" }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disableGutters disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: "35px" }}>
                            <ViewQuiltOutlinedIcon sx={{ color: "#fff" }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography textAlign="right" fontSize="20px">
                                    سفارشات
                                </Typography>
                            }
                            sx={{ ml: "auto" }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disableGutters disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ minWidth: "35px" }}>
                            <LocalOfferOutlinedIcon sx={{ color: "#fff" }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <Typography textAlign="right" fontSize="20px">
                                    تخفیف ها
                                </Typography>
                            }
                            sx={{ ml: "auto" }}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
};

export default SidebarContent;
