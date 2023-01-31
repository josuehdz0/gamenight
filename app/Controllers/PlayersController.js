import { appState } from "../AppState.js";
import { playersService } from "../Services/playerServices.js";
import { getFormData } from "../Utils/FormHandler.js";





export class PlayersController{
  drawPlayers(){
    let players = appState.players
    console.log('drawing players', players);
    let names=''
    players.forEach(players=> names += players.HTMLTemplate)
    document.getElementById('players').innerHTML = names
  }

  addPlayer(){
    window.event.preventDefault()
    const form = window.event.target
    let playerData = getFormData(form)
    playersService.createPlayer(playerData);
    this.drawPlayers()
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