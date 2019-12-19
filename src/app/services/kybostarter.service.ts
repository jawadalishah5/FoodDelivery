import { Kybostarter } from './../models/kybostarter';
import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class KybostarterService {

  kybostarters: Observable<Kybostarter[]>;
  kybostartersCollection: AngularFirestoreCollection<Kybostarter>

  constructor(public afs: AngularFirestore) {
    this.kybostartersCollection=afs.collection<Kybostarter>('kybostarters');

    // get the data and the id use the map operator.
    this.kybostarters = this.kybostartersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Kybostarter;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

   }

   getKybostarters(){
     return this.kybostarters;
   }
}
