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
import { NavLink as NavLinkRouter } from "react-router-dom";

const allLinks = [
    { icon: <HomeIcon sx={{ color: "#fff" }} />, text: "صفحه ی اصلی", path: "/" },
    { icon: <Inventory2OutlinedIcon sx={{ color: "#fff" }} />, text: "محصولات", path: "/products" },
    {
        icon: <InsertCommentOutlinedIcon sx={{ color: "#fff" }} />,
        text: "کامنت ها",
        path: "/comments",
    },
    { icon: <GroupOutlinedIcon sx={{ color: "#fff" }} />, text: "کاربران", path: "/users" },
    { icon: <ViewQuiltOutlinedIcon sx={{ color: "#fff" }} />, text: "سفارشات", path: "/orders" },
    {
        icon: <LocalOfferOutlinedIcon sx={{ color: "#fff" }} />,
        text: "تخفیف ها",
        path: "/discounts",
    },
];

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
                {allLinks.map((item) => (
                    <ListItem disableGutters disablePadding key={item.text}>
                        <ListItemButton component={NavLinkRouter} to={item.path}>
                            <ListItemIcon sx={{ minWidth: "35px" }}>{item.icon}</ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography textAlign="right" fontSize="20px">
                                        {item.text}
                                    </Typography>
                                }
                                sx={{ ml: "auto" }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default SidebarContent;
