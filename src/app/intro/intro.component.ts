import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  template: '',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  constructor(public dialog: MatDialog, public router: Router) {}

  ngOnInit(){
    this.openDialog()
  }
  
  openDialog() {
    this.dialog.open(DialogContentIntro,{ width: '500px', height: '600px',  disableClose: true});
  }

}

@Component({
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class DialogContentIntro {
  constructor(public router: Router) {}
  redirect(path: String){
    this.router.navigate(['./'+path]);
  }
}
