import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DailyHoursCalculator from './components/DailyHoursCalculator';
import ExamScheduleComponent from './components/ExamSchedule';
import SyllabusInput from './components/SyllabusInput';
import PriorityAllocation from './components/PriorityAllocation';
import Timetable from './components/Timetable';
import GamifiedDashboard from './components/GamifiedDashboard';
import { StudyPlannerProvider } from './context/StudyPlannerContext';

function App() {
  return (
    <StudyPlannerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<GamifiedDashboard />} />
          <Route path="/daily-hours" element={<DailyHoursCalculator />} />
          <Route path="/exam-schedule" element={<ExamScheduleComponent />} />
          <Route path="/syllabus" element={<SyllabusInput />} />
          <Route path="/priority" element={<PriorityAllocation />} />
          <Route path="/timetable" element={<Timetable />} />
        </Routes>
      </Router>
    </StudyPlannerProvider>
  );
}

export default App;