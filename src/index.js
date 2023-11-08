import React from "react";
import { createRoot } from "react-dom/client";

const Header = ({ name }) => {
  return (<h1>{name}</h1>)
}

const Part = ({ name, exercises }) => {
  return <p>{name} {exercises}</p>
}

const Content = ({ part }) => {
  const suma = part.reduce((acumulador, valorActual) => acumulador + valorActual.exercises, 0);

  const parts = part.map(item => <Part key={item["id"]} name={item["name"]} exercises={item["exercises"]} />)
  return (
    <>
      {parts}
      <strong>Total of {suma} exercises</strong>
    </>);
}

const Course = ({ course }) => {
  return (
    <>
      <Header name={course["name"]} />
      <Content part={course["parts"]} />
    </>)
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  }

  return <Course course={course} />
}

export default App

createRoot(document.getElementById("root")).render(
  <App />
);
