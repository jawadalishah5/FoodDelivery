import { Cafe } from './../models/cafe';
import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThumbnailServiceService {

  cafes: Observable<Cafe[]>

  cafesCollection: AngularFirestoreCollection<Cafe>

  constructor(public afs: AngularFirestore) {
    this.cafes= this.afs.collection('cafes').valueChanges();
   }

   getCafes(){
     return this.cafes;
   }

}
