import React, { useState } from "react";
import Ball from "./Ball";
import "./Lottery.css";

function Lottery({ title = "Lotto", numBalls = 6, maxNum = 40 }) {
  const [nums, setNums] = useState(Array.from({ length: numBalls }));
  return (
    <section className="Lottery">
      <h1>{title}</h1>
      <div>
        {nums.map((n, key) => (
          <Ball key={key} num={n} />
        ))}
      </div>
      <button
        onClick={() => {
          const number = nums.map(n => Math.floor(Math.random() * maxNum) + 1);
          setNums(number);
        }}
      >
        Generate
      </button>
    </section>
  );
}

export default Lottery;
