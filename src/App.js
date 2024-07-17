import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedbackSection from "./components/FeedbackSection";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Home from "./components/Home";
import Instruction from "./components/Instruction";
import Notification from "./components/Notification";
import OpenVacancies from "./components/OpenVacancies";
import SelfImprovement from "./components/SelfImprovement";

function App() {
  return (
    <div>
      <Header />
      <Home />

      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Notification isAdmin={true}/>}></Route>
          <Route path="/" element={<Notification isAdmin={false}/>}></Route>
        </Routes>
      </BrowserRouter>
      
      <Instruction />
      <SelfImprovement />
      <FeedbackSection />
      <GetStarted />
      
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<OpenVacancies isAdmin={true}/>} />
          <Route path="/" element={<OpenVacancies isAdmin={false}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
