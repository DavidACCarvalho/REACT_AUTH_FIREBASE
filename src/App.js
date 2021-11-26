import { Route, Routes, Navigate } from "react-router";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import ResetPassword from "./components/ResetPassword";
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Missing from './components/Missing';
import UpdateProfile from './components/UpdateProfile';
import UpdateEmail from './components/UpdateEmail';
import UpdatePassword from './components/UpdatePassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate replace to="/login" />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route element={<PrivateRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="updateprofile/*" element={<UpdateProfile />}>
            <Route path="updateemail" element={<UpdateEmail />} />
            <Route path="updatepassword" element={<UpdatePassword />} />
          </Route>
        </Route>
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
}

export default App;
