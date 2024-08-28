import Navbar from "./components/navbar/index.jsx";
import Hero from "./components/hero/index.jsx";
import About from "./components/about/index.jsx";
import Project from "./components/projects/index.jsx";
import Blogs from "./components/blogs/index.jsx";
import Contact from "./components/contact/index.jsx";
import Dock from "./components/dock/index.jsx";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Dock/>
      </BrowserRouter>
    </div>
  );
}

export default App;
