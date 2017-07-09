const express = require("express")
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
const app = express()
const mongoose = require('mongoose')
const Game = require('./games')
const home = require('./routes/home.js')
const create = require('./routes/create.js')
const edit = require('./routes/edit.js')
const destroy = require('./routes/delete.js')
const editId = require('./routes/editId.js')

mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:27017/games')

app.engine('mustache', mustache());
app.set("view engine", 'mustache');
app.set("layout", 'layout');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));


app.use(home)
app.use(create)
app.use(edit)
app.use(editId)
app.use(destroy)

app.listen(3000, function(){
  console.log("everything looks good!")
})

// let game = new games({
//   title: 'Rocket League',
//   image: 'http://tinyurl.com/y8a2b7ur',
//   release: 'July 7, 2015',
//   platform: {xbox: true, playstation: true, nintendo:true}})
// game.save().then(function(req, res){
//   console.log('game has been saved')
// }).catch(function(err){
//   console.log('There was an error!')
// })
