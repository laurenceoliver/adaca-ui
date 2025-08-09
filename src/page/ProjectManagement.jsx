import ProjectSelector from "../components/ProjectSelector";
import CreateTask from "../components/CreateTask";
import {Grid, Typography} from "@mui/material";
import CalendarTask from "../components/CalendarTask";
import TaskFilter from "../components/TaskFilter";
import TaskCard from "../components/TaskCard";

const ProjectManagement = () => {
    return (
        <>
            <Grid
                container
                alignItems="center"
                spacing={2}
                sx={{ mb: 5 }}
                justifyContent="space-between"
            >
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4">Project Management Tool</Typography>
                </Grid>
                <Grid item xs={12} sm={6} container alignItems="center" spacing={1}>
                    <Grid item>
                        <Typography variant="h6">Project:</Typography>
                    </Grid>
                    <Grid item>
                        <ProjectSelector />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={4} justifyContent="space-between">
                <Grid size={3}>
                    <CreateTask />
                </Grid>
                <Grid size={9}>
                    <TaskFilter />
                    <TaskCard />
                </Grid>
            </Grid>
            <Grid container spacing={4} sx={{ mt: 5 }}>
                <Grid size={12}>
                    <CalendarTask />
                </Grid>
            </Grid>
        </>
    );
};

export default ProjectManagement;