import { Box, Button, Modal, Typography } from "@mui/material";

const DeleteModal = ({ title, isOpen, onClose, submitAction, cancelAction }) => {
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            <Box bgcolor="white" p={3} borderRadius={1}>
                <Typography component="h3" variant="h3" mb={4}>
                    {title}
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        onClick={() => submitAction()}
                    >
                        بله
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        size="large"
                        onClick={() => cancelAction()}
                    >
                        خیر
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default DeleteModal;
