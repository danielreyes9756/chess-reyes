import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FirebaseService, openings } from '../service/firebase.service'
@Component({
  template: '',
  styleUrls: ['./add-opening.component.scss']
})
export class AddOpeningComponent implements OnInit {
  
  FEN: String
  called: String
  movements: String
  name: String
  origin: String
  type: String

  constructor(public dialog: MatDialog, public router: Router, private fireBase: FirebaseService) {}

  ngOnInit(){
    this.openDialog()
  }
  
  openDialog() {
    let dialogRef = this.dialog.open(DialogContentAdd,{ width: '1200px',  
    disableClose: true,
    data: {FEN: this.FEN, called: this.called, movements: this.movements, name: this.name, origin: this.origin, type: this.type}});
    dialogRef.afterClosed().subscribe(result => {
      if(result) this.fireBase.addOpening(result)
      this.router.navigate(['./intro']);
    });
  }

}

@Component({
  templateUrl: './add-opening.component.html',
  styleUrls: ['./add-opening.component.scss']
})
export class DialogContentAdd {
  constructor(public router: Router, public dialogRef: MatDialogRef<DialogContentAdd>,
    @Inject(MAT_DIALOG_DATA) public data: openings) {} 
}
