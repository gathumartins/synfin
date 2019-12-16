import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class OverviewComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Company Overview');
  }

  ngOnInit() {
  }

}
