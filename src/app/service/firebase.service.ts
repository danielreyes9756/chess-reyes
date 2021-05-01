import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface openings {
  FEN: String,
  called: String,
  movements: String,
  name: String,
  origin: String,
  type: String,
}

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  public openings: Observable<openings[]>;
  public openingsCollection: AngularFirestoreCollection<openings>;
  public selectedOpening: Observable<openings>;

  constructor(private firestore: AngularFirestore) { 
    this.openingsCollection = this.firestore.collection<openings>('openings');
    this.openings = this.openingsCollection.snapshotChanges().pipe(
      map(action => {
        return action.map(res => {
          const data = res.payload.doc.data();
          const id = res.payload.doc.id;
          return {id, ...data};
        });
      }) 
    )
  }
 
  addOpening(data) {
    return this.firestore.collection('openings').add(data);
  }

  getOpenings(): Observable<openings[]> {
    return this.openings;
  }

  getOpeningById(id){
    return this.firestore.collection('openings').doc(id).valueChanges()
  }
  
}
