import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Retrostarter } from '../models/retrostarter';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RetrostarterService {

  retrostarters: Observable<Retrostarter[]>
  retrostartersCollection: AngularFirestoreCollection<Retrostarter>
  constructor(public afs: AngularFirestore  ) {
    this.retrostartersCollection=afs.collection<Retrostarter>('retrostarters');

    // get the data and the id use the map operator.
    this.retrostarters = this.retrostartersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Retrostarter;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
   }

   getRetrostarters(){
     return this.retrostarters;
   }
}
