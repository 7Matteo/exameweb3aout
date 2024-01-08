import React from "react"
import Joke from "./Joke"
import { Link } from "react-router-dom"



const Jokes = ({ jokes }) => {
  return (
    <ul>
        {jokes.map((element, index) => (
         <Link to={`/jokes/${element.id}`}><Joke key={index} joke={element} /></Link>
          
        ))}
    </ul>
  )

}

export default Jokes