const express = require('express')
const app = express()
const router = express.Router()
const Game = require('../games')

router.get('/edit/:id', function(req, res){
  console.log(req.params)
  id = req.params.id
  console.log(id)
  Game.findOne({"_id": id})
  .then(function(game){
    return res.render('editId', {
      game: game
    })
  }).catch(function(error){
    console.log('something went wrong ^-^')
    return res.redirect('/')
  })
})

router.post('/edit/:id', function(req, res){
  // id = req.params.id
  // console.log(id)
  Game.findOne({"_id": req.params.id})
  .then(function(game){
    game.title = req.body.editTitle
    game.image = req.body.edit-image
    game.release - req.body.edit-release
    game.save()
  }).then(function(){
    console.log("$$$$$$$$$$$$$$$$$$$")
    return res.redirect('/edit')
  }).catch(function(errors){
    console.log('something went wrong!! :(')
  })
})



module.exports = router
