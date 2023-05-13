import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        background: {
            default: "#f0f0f0",
            box: "#1976d2",
        },
    },
    typography: {
        fontFamily: "Lalezar-Regular",
        h1: {
            fontSize: 36,
        },
        h2: {
            fontSize: 30,
        },
        h3: {
            fontSize: 24,
        },
        h4: {
            fontSize: 18,
        },
        h5: {
            fontSize: 16,
        },
        h6: {
            fontSize: 14,
        },
    },
});

export default theme;
