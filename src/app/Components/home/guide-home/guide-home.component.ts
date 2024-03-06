import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-home',
  templateUrl: './guide-home.component.html',
  styleUrls: ['./guide-home.component.css']
})
export class GuideHomeComponent implements OnInit {
  videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet eros in tellus blandit, quis commodo purus interdum. Donec non tortor vel erat ultricies convallis.';
  
  ngOnInit(): void {
  }
  gotoguide(){
    window.open(' Guide','_blank')
  }
}
