import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../mock-players';
//import { PlayerService } from '../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {


    players = PLAYERS;
    selectedPlayer: Player;

  constructor() {

 }

  ngOnInit() {
    //this.getPlayers();
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  /*getPlayers(): void {
    this.playerService.getPlayers()
        .subscribe(players => this.players = players);
  }*/

}
