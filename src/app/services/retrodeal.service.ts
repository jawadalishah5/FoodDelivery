import { Retrodeal } from './../models/retrodeal';
import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument,AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RetrodealService {

  retrodeals: Observable<Retrodeal[]>;
  retrodealsCollection: AngularFirestoreCollection<Retrodeal>;
  constructor(public afs:AngularFirestore) {
    this.retrodealsCollection=afs.collection<Retrodeal>('retrodeals');

    // get the data and the id use the map operator.
    this.retrodeals = this.retrodealsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Retrodeal;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   getRetrodeals(){
     return this.retrodeals;
   }
}
