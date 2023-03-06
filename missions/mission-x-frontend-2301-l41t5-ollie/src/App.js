// import { Routes, Route } from "react-router-dom";
import ProgressTracker from "./components/ProgressTracker/ProgressTracker";
import StudentProfiles from "./components/StudentProfiles/StudentProfiles";
import "./App.css";
// import IMAGES from "./students/index.";

function App() {
  return (
    <div className="App">
      Component 1<br></br>
      <StudentProfiles></StudentProfiles>><br></br>
      Component 2<br></br>
      <ProgressTracker></ProgressTracker>
    </div>
  );
}

export default App;
