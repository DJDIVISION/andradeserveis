import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages'
import './App.css'
import Services from "./pages/Services.jsx";

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/services" element={<Services />}/>
      </Routes>
    </Router>
  );
}

export default App;
