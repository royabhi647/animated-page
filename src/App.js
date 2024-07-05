import FeedbackSection from "./components/FeedbackSection";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Home from "./components/Home";
import Instruction from "./components/Instruction";
import Notification from "./components/Notification";
import SelfImprovement from "./components/SelfImprovement";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Notification />
      <Instruction />
      <SelfImprovement />
      <FeedbackSection />
      <GetStarted />
    </div>
  );
}

export default App;
