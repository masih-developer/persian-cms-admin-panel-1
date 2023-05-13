import { Box, Drawer } from "@mui/material";
import SidebarWidth from "../../../data/SidebarWidth";
import SidebarContent from "./SidebarContent";
import { useContext } from "react";
import { DrawerContext } from "../../../context/DrawerContext";
const drawerWidth = SidebarWidth;

const Sidebar = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useContext(DrawerContext);
    return (
        <Box
            component="nav"
            sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
            aria-label="mailbox folders"
        >
            <Drawer
                open={isOpenSidebar}
                onClose={() => setIsOpenSidebar(false)}
                anchor="right"
                variant="temporary"
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                        bgcolor: "primary.main",
                        color: "common.white",
                    },
                }}
            >
                <SidebarContent />
            </Drawer>
            <Drawer
                anchor="right"
                variant="permanent"
                sx={{
                    display: { xs: "none", md: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                        bgcolor: "primary.main",
                        color: "common.white",
                    },
                }}
            >
                <SidebarContent />
            </Drawer>
        </Box>
    );
};

export default Sidebar;
