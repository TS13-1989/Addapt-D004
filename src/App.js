import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Model1 from "./pages/model1";
import Model2 from "./pages/model2";
import Login from "./pages/login";
import Nav from "./pages/nav";
import Register from "./pages/register.jsx";
import Credits from "./pages/credits";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model1" element={<Model1 />} />
        <Route path="/model2" element={<Model2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </Router>
  );
}

export default App;