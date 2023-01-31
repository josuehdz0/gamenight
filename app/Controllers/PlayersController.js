import { appState } from "../AppState.js";
import { playersService } from "../Services/playerServices.js";





export class PlayersController{
  drawPlayers(){
    let players = appState.players
    console.log('drawing players', players);
    let names=''
    players.forEach(players=> names += players.HTMLTemplate)
    document.getElementById('players').innerHTML = names
  }


  plusPoint(name){
    playersService.addPoint(name)
    this.drawPlayers()
  }

  minusPoint(name){
    playersService.subtractPoint(name)
    this.drawPlayers()
  }

  constructor(){
    this.drawPlayers()
  }

  
}