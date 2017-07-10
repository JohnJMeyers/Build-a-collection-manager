const express = require('express')
const app = express()
const router = express.Router()
const Game = require('../models/games')

router.get('/edit', function(req, res){
  Game.find()
  .then(function(games){
    res.render('edit', {
      games: games
    })
  }).catch(function(error){
    console.log('something went wrong -_-')
  })
})

module.exports = router
