const express = require('express')
const app = express()
const router = express.Router()
const Game = require('../games')



router.get('/', function(req, res){
  Game.find()
  .then(function(games){
    res.render('home', {
      games: games
    })
  })
})



module.exports = router
