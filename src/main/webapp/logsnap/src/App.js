import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
} from 'chart.js';


import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import AdminDashboard from "./pages/admin/AdminDashboard";
import RequireAuth from "./routes/RequireAuth";
import LandingPage from "./pages/Landing";
import Layout from "./pages/employee/Layout";
import EngagePage from "./pages/employee/engage/Engage";
import Home from "./pages/employee/home/Home";
import Kudos from "./pages/employee/myWorkLife/Kudos";
import Feedback from "./pages/employee/myWorkLife/Feedback";
import Review from "./pages/employee/todo/Review";
import Payslip from "./pages/employee/salary/Payslip";
import YdtReport from "./pages/employee/salary/YdtReport";
import ItStatement from "./pages/employee/salary/ItStatement";
import ItDeclaration from "./pages/employee/salary/ItDeclaration";
import Reimbursement from "./pages/employee/salary/Reimbursement";
import ProofOfInvestment from "./pages/employee/salary/ProofOfInvestment";
import FbpDeclaration from "./pages/employee/salary/FbpDeclaration";
import LeaveApply from "./pages/employee/leave/LeaveApply";
import LeaveBalances from "./pages/employee/leave/LeaveBalances";
import LeaveCalander from "./pages/employee/leave/LeaveCalander";
import AttendanceInfo from "./pages/employee/attendance/AttendanceInfo";
import DocumentCenter from "./pages/employee/DocumentCenter";
import HelpDesk from "./pages/employee/HelpDesk";
import RequestHub from "./pages/employee/RequestHub";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />

        {/* Protected Admin Routes */}
        <Route element={<RequireAuth role="ADMIN" />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        {/* Protected Employee Routes */}
        <Route element={<RequireAuth role="EMPLOYEE" />}>
          <Route path="/employee" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="engage" element={<EngagePage />} />
            <Route path="kudos" element={<Kudos />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="review" element={<Review />} />
            <Route path="payslip" element={<Payslip />} />
            <Route path="ydtreport" element={<YdtReport />} />
            <Route path="itstatement" element={<ItStatement />} />
            <Route path="itdeclaration" element={<ItDeclaration />} />
            <Route path="reimbursement" element={<Reimbursement />} />
            <Route path="proofofinvestment" element={<ProofOfInvestment />} />
            <Route path="fbpdeclaration" element={<FbpDeclaration />} />
            <Route path="leaveapply" element={<LeaveApply />} />
            <Route path="leavebalance" element={<LeaveBalances />} />
            <Route path="leavecalendar" element={<LeaveCalander />} />
            <Route path="attendenceinfo" element={<AttendanceInfo />} />
            <Route path="documentcenter" element={<DocumentCenter />} />
            <Route path="helpdesk" element={<HelpDesk />} />
            <Route path="requesthub" element={<RequestHub />} />

            {/* Add more employee routes here */}
          </Route>
        </Route>


        {/* Catch-all for unknown routes */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
