import './App.css';
import ProjectManagement from "./page/ProjectManagement";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {TaskProvider} from "./context/TaskContext";

function App() {
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
            <TaskProvider>
                <ProjectManagement />
            </TaskProvider>
        </div>
      </LocalizationProvider>
  );
}

export default App;
