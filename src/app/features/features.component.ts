import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class FeaturesComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Features');
  }

  ngOnInit() {
  }

}
