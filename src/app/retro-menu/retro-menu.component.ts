import { Retrostarter } from './../models/retrostarter';
import { Retrodeal } from './../models/retrodeal';
import { RetrodealService } from './../services/retrodeal.service';
import { Component, OnInit } from '@angular/core';
import { RetrostarterService } from '../services/retrostarter.service';

@Component({
  selector: 'app-retro-menu',
  templateUrl: './retro-menu.component.html',
  styleUrls: ['./retro-menu.component.css']
})
export class RetroMenuComponent implements OnInit {

  checklist=[];

  total=0;
  count=0;
  
  append(retrodeal:any){
    
    this.count+=1;
    this.checklist.push(retrodeal.name);
    this.total+=retrodeal.price;
    
  }
  
  
  
  retrodeals: Retrodeal[];
  retrostarters: Retrostarter[];

  constructor(public retrodealService: RetrodealService,public retrostarterService: RetrostarterService) { }

  ngOnInit() {
    this.retrodealService.getRetrodeals().subscribe(retrodeals =>{
      this.retrodeals=retrodeals;
    });

    this.retrostarterService.getRetrostarters().subscribe(retrostarters=>{
      this.retrostarters=retrostarters;
    });
  }

}
