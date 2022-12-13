import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./Pages/Home";
import StandardFetch from "./Pages/StandardFetch";
import Error from "./Pages/Error";
import './App.css';
import Navbar from "./components/Navbar";
import FetchWithAxios from "./Pages/FetchWithAxios";
import People from "./Pages/People";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/standard-fetch" element={<StandardFetch />} />
          <Route path="/fetch-with-axios" element={<FetchWithAxios />} />
          <Route path="/people" element={<People />} />
          {/* <Route path="*" element={<Error />} /> */}
          <Route path="*" element={<h1 className="my-2 display-4 text-danger">404 Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

