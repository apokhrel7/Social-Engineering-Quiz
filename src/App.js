import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";

import "./App.css";
import {ResultProvider} from './components/Context/ResultContext';
function App() {
  return (
    <ResultProvider scoreValue="0" responseValue="0">
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: "url(./circle.jpg)" }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz/>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </ResultProvider>
  );
}

export default App;
