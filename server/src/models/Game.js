import { v4 as uuidv4 } from 'uuid'
import Deck from './Deck'
import Player from './Player'
export default class Game {
  constructor() {
    this.id = uuidv4()
    this.players = []
    this.shoe = []
  }

  addPlayer() {
    this.players.push(new Player())
  } 

  addDeck() {
    this.shoe.push(new Deck())
  }

  removePlayer(playerId) {
    this.players = this.players.filter(p => p.id !== playerId)
  }

  getPlayer(playerId) {
    return this.players.filter(p => p.id === playerId)[0]
  }

  getDeck() {
    return this.shoe
  }
}