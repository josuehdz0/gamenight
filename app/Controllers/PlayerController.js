import { appState } from "../AppState.js";

export class PlayersController{
  drawPlayers(){
    let players = appState.players
    console.log('drawing players', players);
    let names=''
    players.forEach(players=> names += players.HTMLTemplate)
    document.getElementById('players').innerHTML = names
  }
}