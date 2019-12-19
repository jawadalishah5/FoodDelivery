
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  
  /*items=[
    {
      item:'Deal 1',
      quantity: 1,
      des: '1 Personal Pan Pizza, 2 Pcs. Garlic Bread and 345ml Soft Drink',
    },
    {
      item: 'Deal 3',
      quantity: 2,
      des: '1 Large Pizza, 6 Pcs. Garlic Bread and 1.5 Ltr. Drink.',
    },
    {
      items: 'channa chaat',
      quantity:1,
      des:'',
    }
  ];*/

  price=0;

  total(){
    
    for(let entry of this.checkoutDeals){
      this.price+=entry.price;
    }
    return this.price;
    }


 
  


  checkoutDeals:Order[];

  
  constructor(public orderService: OrderService) { }

  ngOnInit() {

    this.orderService.getcheckout().subscribe(checkoutDeals =>{
      this.checkoutDeals=checkoutDeals;
    });
  }

}
