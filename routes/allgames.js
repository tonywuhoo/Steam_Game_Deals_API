import { response, Router } from "express"
import allgames from "../seed/allgames.json" assert { type: "json" }

const router = Router()

router.get("/", (request, response) => {
  let nameSearch = request.query.internalName
  let RatingSearch = parseFloat(request.query.steamRatingPercent)
  let dealRating = parseFloat(request.query.dealRating)

  let returnThis = []

  if (request.query.internalName === undefined && request.query.steamRatingPercent === undefined && request.query.dealRating === undefined) {
    console.log("No Parameters entered")
    returnThis = allgames
  }

  allgames.map((element, index) => {
    if (allgames[index].internalName === nameSearch) {
      returnThis = [{}]
      returnThis = ([allgames[index]])
    }
  })

  allgames.map((element, index) => {
    if (allgames[index].steamRatingPercent >= RatingSearch) {
      returnThis.push(allgames[index])
    }
  })

  allgames.map((element, index) => {
    if (allgames[index].dealRating >= dealRating) {
      returnThis.push(allgames[index])
    }
  })


  response.json(returnThis)
})

export default router

