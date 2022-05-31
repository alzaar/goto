export default class GameManager {
  constructor() {
    this.games = []
  }

  addGame(game) {
    this.games.push(game)
  }

  removeGame(gameId) {
    this.games = this.games.filter(game => game.id !== gameId)
  }

  static getInstance(numOfpages) {
    if(!instance){
      instance = new GameManager(numOfpages)
    }
    return instance
  }

  getGame(gameId) {
    return this.games.filter(game => game.id === gameId)[0]
  }

  addDeck(gameId) {
    const game = this.getGame(gameId)
    game.addDeck()
  }

  addPlayer(gameId) {
    const game = this.getGame(gameId)
    game.addPlayer()
  }

  removePlayer(gameId, playerId) {
    const game = this.getGame(gameId)
    game.removePlayer(playerId)
  }

  dealCard({ gameId, playerId } = {}) {
    const game = this.getGame(gameId)
    const player = game.getPlayer(playerId)
    const gameDeck = game.getDeck()
    // Assume deck is shuffled
    if (player && gameDeck[0]) {
      player.cards.push(gameDeck[0][0])
    }
  }
}