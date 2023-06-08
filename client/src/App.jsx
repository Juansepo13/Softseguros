import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { TaskFormPage } from "./pages/TaskFormPage";
import { TasksPage } from "./pages/TasksPage";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <div class="container mx-auto">
      
      <Navigation />
      <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
          <Route path="/tasks-create" element={<TaskFormPage />} />
          <Route path="/task/:id" element={<TaskFormPage />} />
      </Routes>
      <Toaster />
      
      </div>
    </BrowserRouter>
  );
}

export default App;