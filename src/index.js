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

const Course = ({ courses }) => {
  console.log(courses)
  const course = courses.map(course => <><Header name={course["name"]} /><Content part={course["parts"]} /></>)
  return course
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ]

  return <Course courses={courses} />
}

export default App

createRoot(document.getElementById("root")).render(
  <App />
);
