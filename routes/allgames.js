import { response, Router } from "express"
import allgames from "../seed/allgames.json" assert { type: "json" }
import * as controllers from "../controllers/allgames.js"

const router = Router()

router.get("/", (request, response) => {
  let nameSearch = request.query.internalName
  let RatingSearch = parseFloat(request.query.steamRatingPercent)
  let dealRating = parseFloat(request.query.dealRating)

  allgames.map((element, index) => {
    if (allgames[index].internalName === nameSearch) {
      response.json(allgames[index])
    }
  })

  let RatingResult = [{}]
  allgames.map((element, index) => {
    if (allgames[index].steamRatingPercent > RatingSearch) {
      RatingResult.push(allgames[index])
    }
  })

  response.json(RatingResult)

  response.json(allgames)
})

export default router

