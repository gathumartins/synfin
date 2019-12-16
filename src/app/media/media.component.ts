import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class MediaComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Media');
  }

  ngOnInit() {
  }

}
