import { Box, Button, Typography } from "@mui/material";

const DeleteModal = ({ onConfirm, onCancel }) => {
    return (
        <Box bgcolor="white" p={3} borderRadius={1}>
            <Typography component="h3" variant="h3" mb={4}>
                آیا از حذف این محصول مطمئن هستید؟
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
                <Button variant="outlined" color="primary" size="large" onClick={() => onConfirm()}>
                    بله
                </Button>
                <Button variant="contained" color="error" size="large" onClick={() => onCancel()}>
                    خیر
                </Button>
            </Box>
        </Box>
    );
};

export default DeleteModal;
