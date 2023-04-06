import React from "react";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Welcome</div>
      <button onClick={() => navigate("/round1/slot13bU6xKpR9j")}>Slot 1</button>
      <button onClick={() => navigate("/round1/slot27cE2hLmN5v")}>Slot 2</button>
      <button onClick={() => navigate("/round1/slot32tD9zGkQ1s")}>Slot 3</button>
      <button onClick={() => navigate("/round1/slot48wY4fXnJ6m")}>Slot 4</button>
      <button onClick={() => navigate("/round1/slot55rT7vFbK3a")}>Slot 5</button>
      <button onClick={() => navigate("/round1/slot61pZ6cMjH8s")}>Slot 6</button>
      <button onClick={() => navigate("/round1/slot79yS2dFgP5j")}>Slot 7</button>
      <button onClick={() => navigate("/round1/slot86qZ8wNtR1k")}>Slot 8</button>
    </>
  );
};
export default Welcome;