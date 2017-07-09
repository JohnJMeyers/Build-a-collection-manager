

const express = require('express')
const app = express()
const router = express.Router()
const Game = require('../games')

router.get('/edit', function(req, res){
  Game.find()
  .then(function(games){
    console.log(games)
    res.render('edit', {
      games: games
    })
  }).catch(function(error){
    console.log('something went wrong -_-')
  })
})

// router.post('/edit', function(req, res){
//   Game.findOne({title: req.body.edit-title})
//   .then(function(game){
//     game.title = req.body.edit-title
//     game.image = req.body.edit-image
//     game.release - req.body.edit-release
//     game.save()
//   }).then(function(){
//     return res.redirect('/edit')
//   }).catch(function(errors){
//     console.log('something went wrong :(')
//   })
// })


module.exports = router
