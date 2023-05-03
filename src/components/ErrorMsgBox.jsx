import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

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

ErrorMsgBox.propTypes = {
    errMsg: PropTypes.string.isRequired,
};

export default ErrorMsgBox;
