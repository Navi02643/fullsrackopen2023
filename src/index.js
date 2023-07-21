import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const Buttons = (props) => {
  return <button>{props["label"]}</button>;
};

const FeedBack = (props) => {
  const buttons = props["info"].map((info, index) => {
    return <Buttons key={index} label={info["label"]} />;
  });

  return (
    <div>
      <h1>{props["feedbacktext"]}</h1>
      {buttons}
    </div>
  );
};

const Info = (props) => {
  return (
    <p>
      {props["label"]} {props["number"]}
    </p>
  );
};

const Statics = (props) => {
  const info = props["info"].map((info, index) => {
    return <Info key={index} label={info["label"]} number={info["number"]} />;
  });
  return (
    <div>
      <h1>{props["name"]}</h1>
      {info}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const info = {
    feed: "give feedback",
    staticsName: "statics",
    staticsInfo: [
      { label: "good", number: good },
      { label: "neutral", number: neutral },
      { label: "bad", number: bad },
    ],
  };
  return (
    <div>
      <FeedBack feedbacktext={info["feed"]} info={info["staticsInfo"]} />
      <Statics name={info["staticsName"]} info={info["staticsInfo"]} />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
