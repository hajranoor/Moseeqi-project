import { Component, OnInit } from '@angular/core';
declare const activeBtns:any;
@Component({
  selector: 'app-admin-sidepanel',
  templateUrl: './admin-sidepanel.component.html',
  styleUrls: ['./admin-sidepanel.component.css']
})
export class AdminSidepanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    activeBtns();
    // collapsible();
    
  }

}
