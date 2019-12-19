import { OrderService } from './../services/order.service';
import { KybostarterService } from './../services/kybostarter.service';
import { KybodealService } from './../services/kybodeal.service';
import { Kybodeal } from './../models/kybodeal';
import { Component, OnInit } from '@angular/core';
import { Kybostarter } from '../models/kybostarter';
import { Order } from '../models/order';



@Component({
  selector: 'app-kybo-menu',
  templateUrl: './kybo-menu.component.html',
  styleUrls: ['./kybo-menu.component.css']
})
export class KyboMenuComponent implements OnInit {

  
  dictCheckout;
  checklist=[];
  total=0;
  count=0;

  append(kybodeal:any){
    
    this.count+=1;
    this.checklist.push(kybodeal.name);
    this.total+=kybodeal.price;
    this.dictCheckout=kybodeal;
    this.orderService.addCheckout(this.dictCheckout);
    
    
    
  }

  

  kybodeals:Kybodeal[];
  kybostarters:Kybostarter[];
  checkoutdeals:Order[];

  constructor(public kybodealService : KybodealService, public kybostarterService:KybostarterService,public orderService:OrderService) { }

  ngOnInit() {
    this.kybodealService.getKybodeals().subscribe(kybodeals => {
      this.kybodeals=kybodeals;
    });

    this.kybostarterService.getKybostarters().subscribe(kybostarters =>{
      this.kybostarters=kybostarters;
    });

    this.orderService.getcheckout().subscribe(checkoutdeals =>{
      this.checkoutdeals=checkoutdeals;
    });

    
  
  }



  

}
