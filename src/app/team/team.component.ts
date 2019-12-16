import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class TeamComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Team');
  }

  ngOnInit() {
  }

}
