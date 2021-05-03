import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxChessBoardView, NgxChessBoardService } from 'ngx-chess-board';
import { BoardFunctionsService } from './service/board-functions.service'

export interface movement{
  move:String,
  color:String,
  piece:String,
  x:Boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title=""
  @ViewChild('board', {static: false}) board: NgxChessBoardView;
  
  navLinks: any[];
  activeLinkIndex = -1; 
  sub: any;
  colorTheme = false;
  item= '🌕';
  size;

  constructor(private ngxChessBoardService: NgxChessBoardService , private functions: BoardFunctionsService, private router: Router){
    if (window.innerWidth > 800){
      this.size = 800;
    } else{
      this.size = window.innerWidth-20;
    }
    if (window.innerWidth <= 1080 && window.innerWidth >=805) {
      this.size = window.innerWidth-10;
    }
    
    this.functions.sendFENObservable.subscribe(FEN => this.board.setFEN(FEN));
    this.navLinks = [
      {
          label: 'Play Game',
          link: './game',
          index: 0,
      }, {
          label: 'Learn Openings',
          link: './openings',
          index: 1
      }, {
        label: 'Add Openings',
        link: './add',
        index: 1
      }
    ]; 
  }
  
  
  history: Array<movement> = [];

  
  ngOnInit(): void {
  }

  reset() {this.functions.reset(this.board);}

  reverse(){this.board.reverse();}

  undo(){ this.functions.undo(this.board,this.history)}

  async getMoveHistory(){
    await this.functions.sendHistory(this.board,this.history);
    this.functions.sendHistoryObservable.subscribe(response => this.history = response);
    console.log(this.history)
  };
  
  getFEN(){
    console.log(this.board.getFEN())
    return this.board.getFEN()
  }

  onResize(event) {
    if (window.innerWidth > 800){
      this.size = 800;
    } else{
      this.size = window.innerWidth-20;
    }
    if (window.innerWidth <= 1080 && window.innerWidth >=805) {
      this.size = window.innerWidth-10;
    }
  }

}
