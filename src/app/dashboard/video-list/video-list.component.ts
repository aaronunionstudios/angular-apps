import { Component, OnInit } from '@angular/core';
import { videoData } from '../video-data';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  selectedVideo;

  videos = videoData;

  constructor() { }

  ngOnInit(): void { }

  selectVideo(video) {
    this.selectedVideo = video;
    console.log('video', video);
  }

}
