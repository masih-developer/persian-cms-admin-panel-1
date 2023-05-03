import { Box, Container, CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import theme from "./theme";
import AppBar from "./components/Navbar";
import SidebarWidth from "./data/SideBarWidth";
import Sidebar from "./components/Sidebar/Sidebar";
import DrawerProvider from "./context/DrawerContext";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

const drawerWidth = SidebarWidth;

const App = () => {
    const router = useRoutes(routes);
    return (
        <>
            <DrawerProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Box sx={{ display: "flex" }}>
                        <AppBar />
                        <Sidebar />
                        <Box
                            component="main"
                            sx={{
                                flexGrow: 1,
                                width: { md: `calc(100% - ${drawerWidth}px)` },
                            }}
                        >
                            <Toolbar />
                            <Container>{router}</Container>
                        </Box>
                    </Box>
                </ThemeProvider>
            </DrawerProvider>
        </>
    );
};

export default App;
