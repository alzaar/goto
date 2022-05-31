import Game from '../models/Game'
import GameManager from '../models/GameManager'

const gameManager = new GameManager() 
const gameController = {}

gameController.createNewGame = (req, res) => {
  gameManager.addGame(new Game())
  res.send('Created')
}

gameController.deleteGame = (req, res) => {
  gameManager.removeGame(req.params.gameId)
  res.send('Deleted')
}

gameController.getGame = (req, res) => {
  res.send(gameManager.getGame(req.params.gameId))
}

gameController.getAllGames = (req, res) => {
  res.send(gameManager.games)
}

gameController.addDeck = (req, res) => {
  gameManager.addDeck(req.params.gameId)
  res.send('Deck Added')
}

gameController.addPlayer = (req, res) => {
  gameManager.addPlayer(req.params.gameId)
  res.send('Player Added')
}

gameController.removePlayer = (req, res) => {
  gameManager.removePlayer(req.params.gameId, req.params.playerId)
  res.send('Player Removed')
}

gameController.dealCard = (req, res) => {
  gameManager.dealCard(req.params)
}


export default gameController