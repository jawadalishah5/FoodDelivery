import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  checklist=['one','two','three'];

  total=899;
  count=6
  constructor() { }

  ngOnInit() {
  }

}
