import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Question from "./Q/Question";
import Slot1 from "./Q/Slot1";
import Slot2 from "./Q/Slot2";
import Slot3 from "./Q/Slot3";
import Slot4 from "./Q/Slot4";
import Slot5 from "./Q/Slot5";
import Slot6 from "./Q/Slot6";
import Slot7 from "./Q/Slot7";
import Slot8 from "./Q/Slot8";
import FinalRound from "./Q/FinalRound";
import Welcome from "./Welcome";
function App() {
  // const navigate = useNavigate();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/round1/slot13bU6xKpR9j" element={<Slot1 />}></Route>
          <Route
            path="/round1/slot13bU6xKpR9j/:id"
            element={<Question />}
          ></Route>
          <Route path="/round1/slot27cE2hLmN5v" element={<Slot2 />}></Route>
          <Route
            path="/round1/slot27cE2hLmN5v/:id"
            element={<Question />}
          ></Route>
          <Route path="/round1/slot32tD9zGkQ1s" element={<Slot3 />}></Route>
          <Route
            path="/round1/slot32tD9zGkQ1s/:id"
            element={<Question />}
          ></Route>
          <Route path="/round1/slot48wY4fXnJ6m" element={<Slot4 />}></Route>
          <Route
            path="/round1/slot48wY4fXnJ6m/:id"
            element={<Question />}
          ></Route>
          <Route path="/round1/slot55rT7vFbK3a" element={<Slot5 />}></Route>
          <Route
            path="/round1/slot55rT7vFbK3a/:id"
            element={<Question />}
          ></Route>
          <Route path="/round1/slot61pZ6cMjH8s" element={<Slot6 />}></Route>
          <Route
            path="/round1/slot61pZ6cMjH8s/:id"
            element={<Question />}
          ></Route>
          <Route path="/round1/slot79yS2dFgP5j" element={<Slot7 />}></Route>
          <Route
            path="/round1/slot79yS2dFgP5j/:id"
            element={<Question />}
          ></Route>
          <Route path="/round1/slot86qZ8wNtR1k" element={<Slot8 />}></Route>
          <Route
            path="/round1/slot86qZ8wNtR1k/:id"
            element={<Question />}
          ></Route>
          <Route path="/finalround4vT9nGpJ7k" element={<FinalRound />}></Route>
          <Route
            path="/finalround4vT9nGpJ7k/:id"
            element={<Question />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
