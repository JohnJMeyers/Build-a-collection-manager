const express = require("express")
const mustache = require("mustache-express")
const bodyParser = require("body-parser")
const app = express()
const mongoose = require('mongoose')
const Game = require('./models/games')
const home = require('./routes/home')
const create = require('./routes/create')
const edit = require('./routes/edit')
const destroy = require('./routes/delete')
const editId = require('./routes/editId')

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
