const Score = require('../models/Score')

const router = require('express').Router()

router.get("/", (req, res, next) => {
    Score.find({})
        .then(persons => res.json(persons))
        .catch(err => next(err))
})
  
router.post("/", (req, res, next) => {
    const body = req.body
    const errorMessages = []
    if (!body.username) errorMessages.push("name must be present")
    if (!body.date) errorMessages.push("number must be present")
    if (!body.score) errorMessages.push("number must be present")
    if (!body.joke) errorMessages.push("number must be present")
    if (errorMessages.length > 0) {
      res.status(422).json({ errorMessages })
      return
    }
    
    const score = new Score(body)
    score.save().then(result => {
        res.json(result)
    }).catch(err => next(err))
      
})
module.exports = router