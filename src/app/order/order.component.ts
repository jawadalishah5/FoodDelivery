import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  total=899
  items=[
    {
      item:'deal 1',
      quantity: 2,
      des: 'Crispy potato wedges covered with spicy herbs & seasonings',
    },
    {
      item: 'deal 2',
      quantity: 1,
      des: 'Crispy potato wedges covered with spicy herbs & seasonings',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
