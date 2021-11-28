import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz1 from "./Pages/Quiz1/Quiz1";
import Quiz3 from "./Pages/Quiz3/Quiz3";
import Result from "./Pages/Result/Result";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: "url(./circle.jpg)" }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Quiz1" element={<Quiz1 />} />
          <Route path="/Quiz3" element={<Quiz3 />} />
          <Route path="/quiz" element={<Quiz3 />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
