"use client";
import { useState } from "react";

function Counter({ users }) {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount((s) => s + 1)}>{count}</button>;
}

export default Counter;
