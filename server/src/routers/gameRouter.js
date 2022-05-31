import express from 'express'
import gameController from '../controllers/gameController'

const router = express.Router()

router.post('', gameController.createNewGame)
router.delete('/:gameId', gameController.deleteGame)
router.get('', gameController.getAllGames)
router.get('/:gameId', gameController.getGame)
router.post('/:gameId/deck', gameController.addDeck)
router.post('/:gameId/player', gameController.addPlayer)
router.delete('/:gameId/player/:playerId', gameController.removePlayer)

export default router