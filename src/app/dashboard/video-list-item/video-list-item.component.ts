import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list-item',
  templateUrl: '../video-list/video-list.component.html',
  styleUrls: ['../video-list/video-list.component.scss']
})
export class VideoListItemComponent implements OnInit {

  @Input() videoData;

  @Input() videoNumber;

  constructor() {}

  ngOnInit(): void {}
}
