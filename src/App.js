import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/login" element={<Login/>}>Login</Route>
          <Route path="/register" element={<Register/>}>Register</Route>
          <Route path="/dashboard" element={<Dashboard/>}>Dashboard</Route>
          <Route path="/register" element={<Register/>}>Register</Route>
          <Route path="/register" element={<Register/>}>Register</Route>
          <Route path="/register" element={<Register/>}>Register</Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
