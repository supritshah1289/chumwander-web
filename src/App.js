import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./home/home";
import About from "./about/about";
import Header from "./common/header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
