import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Question1 from "./SlotQuestion/Question1";
import Question2 from "./SlotQuestion/Question2";
import Question3 from "./SlotQuestion/Question3";
import Slot1 from "./Slots/Slot1";
import Slot2 from "./Slots/Slot2";
import Slot3 from "./Slots/Slot3";
// import Slot4 from "./Slots/Slot4";
// import Slot5 from "./Slots/Slot5";
// import Slot6 from "./Slots/Slot6";
// import Slot7 from "./Slots/Slot7";
// import Slot8 from "./Slots/Slot8";
// import FinalRound from "./Q/FinalRound";
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
            element={<Question1 />}
          ></Route>
          <Route path="/round1/slot27cE2hLmN5v" element={<Slot2 />}></Route>
          <Route
            path="/round1/slot27cE2hLmN5v/:id"
            element={<Question2 />}
          ></Route>
          <Route path="/round1/slot32tD9zGkQ1s" element={<Slot3 />}></Route>
          <Route
            path="/round1/slot32tD9zGkQ1s/:id"
            element={<Question3 />}
          ></Route>
          {/* <Route path="/round1/slot48wY4fXnJ6m" element={<Slot4 />}></Route>
          <Route
            path="/round1/slot48wY4fXnJ6m/:id"
            element={<Question />}
          ></Route> */}
          {/* <Route path="/round1/slot55rT7vFbK3a" element={<Slot5 />}></Route>
          <Route
            path="/round1/slot55rT7vFbK3a/:id"
            element={<Question />}
          ></Route> */}
          {/* <Route path="/round1/slot61pZ6cMjH8s" element={<Slot6 />}></Route>
          <Route
            path="/round1/slot61pZ6cMjH8s/:id"
            element={<Question />}
          ></Route> */}
          {/* <Route path="/round1/slot79yS2dFgP5j" element={<Slot7 />}></Route>
          <Route
            path="/round1/slot79yS2dFgP5j/:id"
            element={<Question />}
          ></Route> */}
          {/* <Route path="/round1/slot86qZ8wNtR1k" element={<Slot8 />}></Route>
          <Route
            path="/round1/slot86qZ8wNtR1k/:id"
            element={<Question />}
          ></Route> */}
          {/* <Route path="/finalround4vT9nGpJ7k" element={<FinalRound />}></Route>
          <Route
            path="/finalround4vT9nGpJ7k/:id"
            element={<Question />}
          ></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
