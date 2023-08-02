import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 });

  const calculateAll = () => {
    return clicks.good + clicks.neutral + clicks.bad;
  };

  const calculateAverage = () => {
    const total = calculateAll();
    const average = (clicks.good - clicks.bad) / total;
    return average || 0;
  };
  const calculatePositive = () => {
    const total = calculateAll();
    if (total === 0) {
      return 0;
    }
    const percentage = (clicks.good / total) * 100;
    return percentage;
  };

  const handleGoodClick = () => {
    calculateAverage();
    const newClicks = {
      good: clicks["good"] + 1,
      neutral: clicks["neutral"],
      bad: clicks["bad"],
    };
    setClicks(newClicks);
  };

  const handleNeutralClick = () => {
    const newClicks = {
      good: clicks["good"],
      neutral: clicks["neutral"] + 1,
      bad: clicks["bad"],
    };
    setClicks(newClicks);
  };

  const handleBadClick = () => {
    const newClicks = {
      good: clicks["good"],
      neutral: clicks["neutral"],
      bad: clicks["bad"] + 1,
    };
    setClicks(newClicks);
  };

  return (
    <>
      <h1>Give feedBack</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      <h1>statics</h1>
      <p>good: {clicks["good"]}</p>
      <p>neutral: {clicks["neutral"]}</p>
      <p>bad: {clicks["bad"]}</p>
      <p>All: {calculateAll()}</p>
      <p>Average: {calculateAverage()}</p>
      <p>Positive: {calculatePositive()}</p>
    </>
  );
};

createRoot(document.getElementById("root")).render(<App />);
