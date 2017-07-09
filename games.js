const mongoose = require('mongoose')

const videoGameSchema = new mongoose.Schema({
  title: {type:String, required: true},
  image: {type:String, required: true },
  release: {type:String, required:true},
  // platform: {
  //   type:
  //   {
  //     xbox: {type:String},
  //     playstation: {type:String},
  //     nintendo: {type:String},
  //     other: {type:String}
  //   }
  // }
})
const Game = mongoose.model('videoGames', videoGameSchema)

module.exports = Game
