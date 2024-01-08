import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { Context as jokeContext } from 'contexts/jokeContext';



const FullJoke = ({ jokes }) => {
const { getJokeWithScores } = useContext(jokeContext);
  const id = useParams().id
  const joke = getJokeWithScores(id)
  console.log(joke);
  return (
    <p>
      <li>{joke.question}? : <ul>
            {joke.scores.map((element, index) => (
                <li>
                    {element.score}
                </li>
          
        ))}
        </ul>
    </li>
    </p>
  )

}

export default FullJoke