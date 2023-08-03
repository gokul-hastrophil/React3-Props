import React from "react";
import Joke from "./joke";
import JokesData from "./JokesData";
export default function App(){
  const jokeElements = JokesData.map(joke => {
  return <Joke setup={joke.setup} punchline={joke.punchline}/>})
  return (
    <>
    {jokeElements}
      </>
  )
   
}