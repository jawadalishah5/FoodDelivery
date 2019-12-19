import { Kybodeal } from './../models/kybodeal';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class KybodealService {

  kybodeals: Observable<Kybodeal[]>
  kybodealsCollection : AngularFirestoreCollection<Kybodeal>
  constructor(public afs: AngularFirestore) { 
    
    this.kybodealsCollection=afs.collection<Kybodeal>('kybodeals');

    // get the data and the id use the map operator.
    this.kybodeals = this.kybodealsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Kybodeal;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getKybodeals(){
    return this.kybodeals;
  }

 

}
