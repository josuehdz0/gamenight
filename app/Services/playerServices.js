import { appState } from "../AppState.js";


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

}

export const playersService = new PlayerService