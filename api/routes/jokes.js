const Joke = require('../models/Joke')

const router = require('express').Router()

router.get("/", (req, res, next) => {
    Joke.find({})
        .then(persons => res.json(persons))
        .catch(err => next(err))
})
  

router.get("/:id", (req, res, next) => {
    Joke.findById(req.params.id).then(joke => {
        if (joke) {
        res.json(person)
        } else {
            console.log("error find by id");
        }
    }).catch(err => next(err))
})
  
router.delete("/:id", (req, res, next) => {
    Joke.findByIdAndRemove(req.params.id).then(result => {
      if (result) {
        res.json(result)
      } else {
        console.log("error delete one");
      }
    })
      .catch(err => next(err))
});

router.post("/", (req, res, next) => {
    const body = req.body
    const errorMessages = []
    if (!body.question) errorMessages.push("name must be present")
    if (!body.answer) errorMessages.push("number must be present")
    if (!body.category) errorMessages.push("number must be present")
    if (errorMessages.length > 0) {
      res.status(422).json({ errorMessages })
      return
    }
    
    const joke = new Joke(body)
    joke.save().then(result => {
        res.json(result)
    }).catch(err => next(err))
      
})
  
  

module.exports = router