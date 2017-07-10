const express = require('express')
const app = express()
const router = express.Router()
const Game = require('../models/games')

router.get('/create', function(req, res){
  return res.render('create')
})

router.post('/create', function(req, res){
console.log(req.body.platform)

  let game = new Game({
    title: req.body.title,
    image: req.body.image,
    release: req.body.release,
  })
    game.save().then(function(game){
    console.log('game has been saved')
    res.redirect('/')
  }).catch(function(err){
    console.log('There was an error!')
  })
})

module.exports = router
