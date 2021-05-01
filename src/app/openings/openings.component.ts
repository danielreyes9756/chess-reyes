import { Component, OnInit } from '@angular/core';
import { FirebaseService, openings } from '../service/firebase.service'
import { Observable } from 'rxjs';
import { BoardFunctionsService } from '../service/board-functions.service';

@Component({
  selector: 'app-openings',
  templateUrl: './openings.component.html',
  styleUrls: ['./openings.component.scss']
})

export class OpeningsComponent implements OnInit {
  constructor(private firebase:FirebaseService, private boardService: BoardFunctionsService) { }
 
  openings: Observable<openings[]>;
  selected: any;

  ngOnInit(): void {
    this.openings = this.firebase.getOpenings();
    console.log(this.openings)
    this.selected= {
      FEN:"",
      called: "",
      movements: "",
      name: "",
      origin: "",
      type: "",
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
  }
  
  async changeSelectedInfo(id){
    this.selected= {
      FEN:"",
      called: "",
      movements: "",
      name: "",
      origin: "",
      type: "",
    }
    await this.firebase.getOpeningById(id).subscribe( opening => {this.selected = opening});
    await this.delay(100);
    this.boardService.setFEN(this.selected['FEN']);
  }
}
