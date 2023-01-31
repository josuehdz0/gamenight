import { appState } from "../AppState.js";
import { Player } from "../Models/Players.js";


class PlayerService{

  addPoint(name){
    let player = appState.players.find(player=> player.name ==name)
    console.log('adding point in service', player);
    player.addPoint()
  }

   subtractPoint(name){
    let player = appState.players.find(player=> player.name ==name)
    console.log('subtracting point in service', player);
    player.subtractPoint()
  }

  createPlayer(playerData){
    let newPlayer =  new Player(playerData.name, playerData.emoji, playerData.score)
    appState.players.push(newPlayer)
  }

}

export const playersService = new PlayerService