import React from "react";
import { createRoot } from "react-dom/client";

const Header = (props) => {
  return (
    <div>
      <h1>{props["course"]}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props["part"]} {props["exercises"]}
      </p>
    </div>
  );
};

const Content = (props) => {
  const parts = props.parts.map((part, index) => (
    <Part key={index} part={part["name"]} exercises={part["exercises"]} />
  ));

  return <div>{parts}</div>;
};

const Total = (props) => {
  const suma = props.parts.reduce(
    (total, { exercises }) => total + exercises,
    0
  );

  return (
    <div>
      <p>Number of exercises {suma}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course["name"]} />
      <Content parts={course["parts"]} />
      <Total parts={course["parts"]} />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
