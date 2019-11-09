import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  deals=[
    {
      deal: 'Deal 1',
      items: '1 Personal Pan Pizza, 2 Pcs. Garlic Bread and 345ml Soft Drink',
      price: 399,
    },
    {
      deal: 'Deal 2',
      items: '1 Large Pizza, 6 Pcs. Garlic Bread and 1.5 Ltr. Drink.',
      price: 599,
    },
    {
      deal: 'Deal 3',
      items: '1 XL Pizza, 8 Pcs Garlic Breads & 1.5 Liter Drink.',
      price: 1999,
    },
  ];

  starters=[
    {
      deal: 'Deal 1',
      items: '1 Personal Pan Pizza, 2 Pcs. Garlic Bread and 345ml Soft Drink',
      price: 399,
    },
    {
      deal: 'Deal 2',
      items: '1 Large Pizza, 6 Pcs. Garlic Bread and 1.5 Ltr. Drink.',
      price: 599,
    },
    {
      deal: 'Deal 3',
      items: '1 XL Pizza, 8 Pcs Garlic Breads & 1.5 Liter Drink.',
      price: 1999,
    },
  ];

  burgers=[
    {
      deal: 'Deal 1',
      items: '1 Personal Pan Pizza, 2 Pcs. Garlic Bread and 345ml Soft Drink',
      price: 399,
    },
    {
      deal: 'Deal 2',
      items: '1 Large Pizza, 6 Pcs. Garlic Bread and 1.5 Ltr. Drink.',
      price: 599,
    },
    {
      deal: 'Deal 3',
      items: '1 XL Pizza, 8 Pcs Garlic Breads & 1.5 Liter Drink.',
      price: 1999,
    },
  ];

  pizzas=[
    {
      deal: 'Deal 1',
      items: '1 Personal Pan Pizza, 2 Pcs. Garlic Bread and 345ml Soft Drink',
      price: 399,
    },
    {
      deal: 'Deal 2',
      items: '1 Large Pizza, 6 Pcs. Garlic Bread and 1.5 Ltr. Drink.',
      price: 599,
    },
    {
      deal: 'Deal 3',
      items: '1 XL Pizza, 8 Pcs Garlic Breads & 1.5 Liter Drink.',
      price: 1999,
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
