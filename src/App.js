import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Setting from "./pages/Setting/Setting";
import Transaction from "./pages/Transactions/Transactions"


function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/login" element={<Login/>}>Login</Route>
          <Route path="/register" element={<Register/>}>Register</Route>
          <Route path="/dashboard" element={<Dashboard/>}>Dashboard</Route>
          <Route path="/transaction" element={<Transaction/>}>Transaction</Route>
          <Route path="/about" element={<About/>}>About</Route>
          <Route path="/setting" element={<Setting/>}>Setting</Route>
          <Route path="/logout" element={<Login/>}>Login</Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
