const express = require('express')
const app = express()
const router = express.Router()
const Game = require('../games')

router.get('/delete', function(req, res){
  Game.find()
  .then(function(games){
    console.log(games)
    res.render('delete', {
      games: games
    })
  }).catch(function(error){
    console.log('something went wrong :(')
  })
})

router.post('/delete', function(req, res){
  console.log('&&&' + req.body.delete + '&&&')
  Game.deleteOne({_id: req.body.delete})
  .then(function(){
    return res.redirect('/delete')
  }).catch(function(error){
    console.log('something went wrong :(')
  })

})




module.exports = router
