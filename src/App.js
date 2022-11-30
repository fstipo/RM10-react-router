import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          {/* <Route path="*" element={<h1 className="my-2 display-4 text-danger">404 Page not found</h1>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
