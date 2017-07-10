const express = require('express')
const app = express()
const router = express.Router()
const Game = require('../models/games')

router.get('/edit/:id', function(req, res){
  let id = req.params.id
  Game.findOne({"_id": id})
  .then(function(game){
    return res.render('editId', {
      game: game
    })
  }).catch(function(error){
    console.log('something went wrong')
    return res.redirect('/')
  })
})

router.post('/edit/:id', function(req, res){
  Game.findOne({"_id": req.params.id})
  .then(function(game){
    game.title = req.body.editTitle
    game.image = req.body.editImage
    game.release = req.body.editRelease
    game.save()
  }).then(function(){
    return res.redirect('/edit')
  }).catch(function(errors){
    console.log('something went wrong')
  })
})



module.exports = router
