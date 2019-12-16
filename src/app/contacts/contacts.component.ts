import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class ContactsComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Contacts');
  }

  ngOnInit() {
  }

}
