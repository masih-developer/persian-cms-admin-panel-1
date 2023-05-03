import { Box, Typography } from "@mui/material";

const ErrorMsgBox = ({ errMsg }) => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "error.light",
                color: "background.default",
                py: 2,
            }}
        >
            <Typography component="h3" variant="h3">
                {errMsg}
            </Typography>
        </Box>
    );
};

export default ErrorMsgBox;
