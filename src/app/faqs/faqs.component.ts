import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class FaqsComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('FAQs');
  }

  ngOnInit() {
  }

}
