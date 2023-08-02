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

  const information = {
    name: "Statistics",
    votes: [
      { name: "good", number: clicks["good"] },
      { name: "neutral", number: clicks["neutral"] },
      { name: "bad", number: clicks["bad"] },
      { name: "total", number: calculateAll() },
      { name: "average", number: calculateAverage() },
      { name: "positive", number: calculatePositive() },
    ],
  };

  const Part = (props) => {
    return (
      <p>
        {props["name"]}: {props["number"]}
      </p>
    );
  };

  const Statistics = (props) => {
    const parts = props.info["votes"].map((info, index) => (
      <Part key={index} name={info["name"]} number={info["number"]} />
    ));
    return (
      <>
        <h1>{props["info"]["name"]}</h1>
        {props["info"]["votes"][3]["number"] > 0 ? (
          parts
        ) : (
          <p>No feedBack given</p>
        )}
      </>
    );
  };

  return (
    <>
      <h1>Give feedBack</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      <Statistics info={information} />
    </>
  );
};

createRoot(document.getElementById("root")).render(<App />);
