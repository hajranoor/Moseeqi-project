import { Component, OnInit } from '@angular/core';
import { UploadsongService } from '../shared/uploadsong.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css'],
  providers: [UploadsongService]
})
export class SongListComponent implements OnInit {
  songs: any
  constructor(private UploadsongService: UploadsongService) { 
    this.UploadsongService.getSongsList().subscribe({next: (res) => {
      console.log(res)
      this.songs = res
    }})
  }

  ngOnInit(): void {
  }

}
