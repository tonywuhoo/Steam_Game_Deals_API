import mongoose, { mongo } from "mongoose";

let Allgame = new mongoose.Schema({
  internalName : { type: String },
  title : { type: String },
  metacriticLink : { type: String },
  dealID : { type: String },
  storeID : { type: String },
  gameID : { type: String },
  salePrice : { type: String },
  normalPrice : { type: String },
  isOnSale : parseInt({ type: String }),
  savings : { type: String },
  metacriticScore : { type: String },
  steamRatingText : { type: String },
  steamRatingPercent : { type: String },
  steamRatingCount : { type: String },
  steamAppID : { type: String },
  releaseDate : { type: Number },
  lastChange : { type: Number },
  dealRating : { type: String },
  thumb : { type: String },
})

export default mongoose.model("Allgame", Allgame)
