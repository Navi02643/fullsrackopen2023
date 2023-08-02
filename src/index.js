import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [anecdoteVote, setVote] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5:0 });

  const selectRandomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * props.anecdotes.length);
    console.log({randomNumber});
    setSelected(randomNumber);
  };

  const handleVote = (selected) => {
    setVote({
      ...anecdoteVote,
      [selected]: anecdoteVote[selected] + 1,
    });
  }

  const findMostVotedAnecdote = (anecdoteVote) => {
    let maxVotes = 0;
    let mostVotedAnecdote = null;
  
    for (const key in anecdoteVote) {
      const votes = anecdoteVote[key];
      if (votes > maxVotes) {
        maxVotes = votes;
        mostVotedAnecdote = parseInt(key); // Convertir la clave a número
      }
    }
  
    return mostVotedAnecdote;
  };

  const mostVotedAnecdoteIndex = findMostVotedAnecdote(anecdoteVote);

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>Has {anecdoteVote[selected]} votes</p>
      <button onClick={() => handleVote(selected)}>Vote</button>
      <button onClick={selectRandomAnecdote}>next anecdote</button>
      <hr />
       <h2>Anecdote with Most Votes</h2>
      {mostVotedAnecdoteIndex !== null && (
        <>
          <p>{props.anecdotes[mostVotedAnecdoteIndex]}</p>
          <p>Has {anecdoteVote[mostVotedAnecdoteIndex]} votes</p>
        </>
      )}
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

createRoot(document.getElementById("root")).render(
  <App anecdotes={anecdotes} />
);
