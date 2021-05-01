import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface movement{
  move:String,
  color:String,
  piece:String,
  x:Boolean
}

@Injectable({
  providedIn: 'root'
})
export class BoardFunctionsService {

  private sendHistorySubject =  new Subject <movement[]>();
  sendHistoryObservable = this.sendHistorySubject.asObservable();
  private sendFENSubject = new Subject <string>();
  sendFENObservable = this.sendFENSubject.asObservable();

  async sendHistory(board,history){
    history = [];
    await board.getMoveHistory().forEach(element => {
      history.push(element);
    });
    this.sendHistorySubject.next(history);
  }
  
  reset(board){
    board.reset();
    this.sendHistorySubject.next([]);
  }

  undo(board, history){
    board.undo();
    history.splice(history.length-1)
    this.sendHistorySubject.next(history);
  }
  
  setFEN(FEN: string){
    this.sendFENSubject.next(FEN);
  }
}
