import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class PricingComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Pricing');
  }

  ngOnInit() {
  }

}
