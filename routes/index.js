import { Router } from "express"
import gamesRoutes from "./allgames.js"

const router = Router()

router.get("/", (request, response) => {
  response.json({
    "All Games" : "http://localhost:3000/games",
  })
})

router.use("/games", gamesRoutes)

export default router
