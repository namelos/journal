import React from "react";

export const Counter = ({ n, increment }) => <div>
  <span>counter: {n}</span>
  <button onClick={increment}>increment</button>
</div>