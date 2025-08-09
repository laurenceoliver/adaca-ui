import {useTaskContext} from "../context/TaskContext";
import {Box, Card, CardActionArea, CardContent, Grid, Typography,} from "@mui/material";
import {useState} from "react";
import TaskDetailsDialog from "./TaskDetailsDialog";

const statusLabels = {
    1: "Pending",
    2: "In Progress",
    3: "Completed",
};

const TaskList = ({ status, tasks, onTaskClick }) => (
    <Grid size={4}>
        <Box display="flex" gap={2} flexDirection="column">
            <Typography variant="h6">{statusLabels[status]}</Typography>
            {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                    <Card key={task.id}>
                        <CardActionArea onClick={() => onTaskClick(task)}>
                            <CardContent>
                                <Typography variant="body2">{task.name}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
        </Box>
    </Grid>
);

const TaskCard = () => {
    const { tasks, selectedProject } = useTaskContext();
    const [selectedTask, setSelectedTask] = useState(null);
    const [showTaskModal, setShowTaskModal] = useState(false);

    const showTaskDetails = (task) => {
        setSelectedTask(task);
        setShowTaskModal(true);
    };

    const handleClose = () => {
        setShowTaskModal(false);
        setSelectedTask(null);
    };

    return (selectedProject ?
        <>
            <Grid container spacing={2} sx={{ mt: 5 }}>
                {[1, 2, 3].map((status) => (
                    <TaskList key={status} status={status} tasks={tasks} onTaskClick={showTaskDetails} />
                ))}
            </Grid>

            <TaskDetailsDialog
                open={showTaskModal}
                onClose={handleClose}
                task={selectedTask}
            />
        </> : null
    );
};

export default TaskCard;