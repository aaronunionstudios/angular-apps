import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  selectedVideo;

  @Input() videos;

  constructor() { }

  ngOnInit(): void { }

  selectVideo(video) {
    this.selectedVideo = video;
    console.log('video', video);
  }

}
