
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LayoutSwitch from "./layouts/LayoutSwitch";
import AdminRoutes from "./routes/AdminRoutes";
import AdminLogin from './admin/components/AdminLogin/index.jsx';
import './common/Atoms/atoms.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route path="/" element={<LayoutSwitch />}>
          <Route index element={<Navigate to="/admin" replace />} />

          {AdminRoutes()}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
