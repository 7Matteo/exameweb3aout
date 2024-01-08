import React, { useEffect, useState } from "react";
import JokesAPI from "services/jokeApi";
import ScoresAPI from "services/scoreApi";

const Context = React.createContext(null)

    
const ProviderWrapper = (props) => {

    
  const [jokes, setJokes] = useState([])
  const [scores, setScores] = useState([])

  const initialLoad = () => {
      JokesAPI
      .getAll()
      .then(jokes => ScoresAPI
      .getAll()
      .then(scores => {
        setScores(scores)
        const updatedJokes = jokes.map((joke) => {
          const jokeId = joke.id;
          const scoresForJoke = scores.filter((score) => score.joke === jokeId);
          const scoresCountForJoke = scoresForJoke.length;

          let totalScoreSum = 0;
          scoresForJoke.forEach((score) => {
            totalScoreSum += score.value;
          });

          const averageScore =
            scoresCountForJoke > 0 ? parseFloat((totalScoreSum / scoresCountForJoke).toFixed(1)) : 0;

          return {
            ...joke,
            scoreCount: scoresCountForJoke,
            averageScore: averageScore,
          };
        });

        setJokes(updatedJokes);
        
      }
        
        
        )
      .catch(error => console.warn(error))
      )
      .catch(error => console.warn(error))
      

      

  }
  useEffect(initialLoad, [])


  const getJokeWithScores = (id) => {
    const joke = jokes.find(joke => joke.id === id)

    const scoresOfJoke = scores.filter(score => score.joke === id)
    const scoreCount = scoresOfJoke.length
    let moy = 0
    scoresOfJoke.forEach(score => moy += score.score)
    const averageScore = moy / scoreCount

    return {
      ...joke,
      scores: scoresOfJoke,
      scoreCount,
      averageScore
    }
  }

  return (
      <Context.Provider value={{ jokes, scores, getJokeWithScores }}>
        {props.children}
      </Context.Provider>
    );    
    
}
    
export {    
    Context,
    ProviderWrapper,    
}