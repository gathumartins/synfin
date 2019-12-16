import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class CareersComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Careers');
  }

  ngOnInit() {
  }

}
