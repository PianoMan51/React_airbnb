import React from "react";
import jokesData from "../jokesData";

export default function Jokes() {
  let jokeElements = jokesData.map((joke) => {
    return (
      <div>
        <h4>{joke.setup}</h4>
        <p>{joke.punchline}</p>
        <p>______________________</p>
      </div>
    );
  });

  return <div>{jokeElements}</div>;
}
