import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardFunctionsService } from '../service/board-functions.service'

export interface movement{
  move:String,
  color:String,
  piece:String,
  x:Boolean
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private router: Router, private functions: BoardFunctionsService) { }
  history: Array<movement> = [];
  pieces = [{'Pb' : '♟', 'Pw' : '♙', 'Bb': '♝', 'Bw' : '♗', 'Nb' : '♞', 'Nw' : '♘', 'Rb' : '♜', 'Rw' : '♖', 'Qb' : '♛', 'Qw' : '♕', 'Kb' : '♚', 'Kw' : '♔'}];
  
  ngOnInit(): void {
    this.functions.sendHistoryObservable.subscribe(response => this.history = response);
  }
   
}
