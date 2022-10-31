import db from "../db/connection.js"
import allgames from "./allgames.json" assert { type: "json" }
import fetch from 'node-fetch';
import { promises as fsPromises } from 'fs';
import Allgame from "../models/Allgame.js"


fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1')
  .then(response => response.json())
  .then(data => {
    data.map((element, index) => {
      data[index].salePrice = parseFloat(data[index].salePrice)
      data[index].normalPrice = parseFloat(data[index].normalPrice)
      data[index].steamRatingPercent = parseFloat(data[index].steamRatingPercent)
      data[index].dealRating = parseFloat(data[index].dealRating)
    })
    fsPromises.writeFile("./seed/allgames.json", JSON.stringify((data)))
  })
  .catch(error => console.error(error))


async function insertData() {
  await db.dropDatabase()

  await Allgame.create(allgames)

  await db.close()
} 

insertData()
