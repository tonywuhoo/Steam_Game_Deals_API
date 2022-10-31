// import { response } from "express"
// import Allgames from "../models/Allgame.js"

// export async function getGames(request, response) {
//   try {
//     const games = await Allgames.find()
//     let querySearch = request.query
//     console.log(querySearch)
//     response.json(games)
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ error: error.message });
//   }
