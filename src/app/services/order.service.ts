import { Order } from './../models/order';

import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class OrderService {
  checkoutdeals: Observable<Order[]>
  checkoutdealsCollection : AngularFirestoreCollection<Order>
  constructor(public afs: AngularFirestore) { 
    
    this.checkoutdealsCollection=afs.collection<Order>('checkoutdeals');

    // get the data and the id use the map operator.
    this.checkoutdeals = this.checkoutdealsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Order;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getcheckout(){
    return this.checkoutdeals;
  }

  addCheckout(order:Order){
    this.checkoutdealsCollection.add(order);
  }

 

}