import React from "react"



const Joke = ({ joke }) => {
  return (
    <p>
      <li>{joke.question}? : {joke.answer}</li>
    </p>
  )

}

export default Joke