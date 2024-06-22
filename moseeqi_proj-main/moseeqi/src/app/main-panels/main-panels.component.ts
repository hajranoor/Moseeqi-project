import { Component, OnInit } from '@angular/core';
import { ListBoxComponent } from '@syncfusion/ej2-angular-dropdowns';
// import * as abc from 'moseeqi/src/assets/javaFunc/functions.js';
// import {activeBtns} from './../../assets/javaFunc/functions.js';
declare const activeBtns:any;
// declare const collapsible:any;
@Component({
  selector: 'app-main-panels',
  templateUrl: './main-panels.component.html',
  styleUrls: ['./main-panels.component.css']
})
export class MainPanelsComponent implements OnInit {
// onSliderChangeEnd($event: Event) {
// throw new Error('Method not implemented.');
// }
selectedData = [{ id: 1}, { id: 2}, { id: 3}, { id: 4}, { id: 5}, { id: 6 }];
songsarray = [{img:"../../assets/images/500x500.jpg",name: "Stay Alive"},{img:"../../assets/images/Kygo_and_Chelsea_Cutler_-_Not_OK.png",name:"Not OK"},{img:"../../assets/images/fakelove.jpg",name:"Fake Love"},{img:"../../assets/images/BTS-airplane-pt-2-japanese-ver-MV-vid-2018-billboard-1548.png",name:"Airplane pt.2"},{img:"../../assets/images/9232a5b440067526210cc91a771fed6f.jpg",name:"You were good to me"},{img:"../../assets/images/jk.jpg",name:"Decalcomania"},{img:"../../assets/images/ENHYPEN-tries-to-escape-from-darkness-in-transfixing-Fever-music-video-1.jpg", name:"Fever"}]
  
  constructor() { }

  ngOnInit(): void {
    activeBtns();
    // collapsible();
    
  }
  // files: Array<any> = [
  //   { name: "First Song", artist: "Inder" },
  //   { name: "Second Song", artist: "You" }
  // ];
  // state;
  // currentFile: any = {};

  // isFirstPlaying() {
  //   return false;
  // }
  // isLastPlaying() {
  //   return true;
  // }

}
