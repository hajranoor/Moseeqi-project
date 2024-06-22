import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { ViewartistsComponent } from '../viewartists/viewartists.component';
declare const activeBtns:any;
@Component({
  selector: 'app-listener-panel',
  templateUrl: './listener-panel.component.html',
  styleUrls: ['./listener-panel.component.css']
})
export class ListenerPanelComponent {
  songsarray = [{img:"../../assets/images/500x500.jpg",name: "Stay Alive"}]
  // currentMsgFromChild1ToChild2 : any;
  constructor() { }

  // fwdMsgToSib2($event: any) { this.currentMsgFromChild1ToChild2 = $event; }

  

  ngOnInit(): void {
    activeBtns();
    // collapsible();
    
  }
}
