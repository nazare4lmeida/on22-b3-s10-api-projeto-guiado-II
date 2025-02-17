const controllerSongs = require("../controllers/songsController")
const express = require("express")
const router = express.Router()

//router.metodo http (rota/função)
 
router.get("/library", controllerSongs.getAllSongs)
router.get("/songs/:id", controllerSongs.getSongsByID)
router.get("/artists", controllerSongs.getArtists)
router.post("/add", controllerSongs.addSong)
router.put("/update/:id", controllerSongs.updateSong)
router.delete("/delete/:id", controllerSongs.deleteSong)
router.patch("/favorited/:id", controllerSongs.updateFav)

module.exports = router