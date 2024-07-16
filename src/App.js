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
      <Notification isAdmin={true}/>
      <Instruction />
      <SelfImprovement />
      <FeedbackSection />
      <GetStarted />
      <OpenVacancies isAdmin={true} />
    </div>
  );
}

export default App;
