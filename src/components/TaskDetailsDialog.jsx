import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Box,
    Typography,
    Button,
} from "@mui/material";
import dayjs from "dayjs";

const statusLabels = {
    1: "Pending",
    2: "In Progress",
    3: "Completed",
};

const TaskDetailsDialog = ({ open, onClose, task }) => {
    if (!task) return null;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="task-dialog-title"
            maxWidth="sm"
            fullWidth
        >
            <DialogTitle id="task-dialog-title">{task.name}</DialogTitle>
            <DialogContent dividers>
                <Box display="flex" flexDirection="column" gap={2}>
                    <Typography>Priority: {task.priority}</Typography>
                    <Typography>Assignee: {task.assignee?.developerName}</Typography>
                    <Typography>
                        Due Date: {dayjs(task.dueDate).format("D MMMM YYYY")}
                    </Typography>
                    <Typography>Status: {statusLabels[task.status] || "Unknown"}</Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="contained">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default TaskDetailsDialog;