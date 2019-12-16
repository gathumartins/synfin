import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
    .navbar-dark .navbar-nav .nav-link{
      color:rgb(255, 255, 255);
    }
    .navbar-brand img{
      max-height:40px;
    }
    .dropdown-menu .sub-menu {
      left: 100%;
      position: absolute;
      top: 15px;
      visibility: hidden;
    }

    .dropdown-menu li:hover .sub-menu {
      visibility: visible;
    }

    .dropdown:hover .dropdown-menu {
      display: block;
    }
    .bg-synfin{
      background:#ec1260;
    }
    .dropdown-menu{
      background-color:rgba(255, 255, 255, 0.5) !important;
    }
    @media only screen and (max-width:991px){
      .navbar-expand-lg{
        background-image: -moz-linear-gradient(6deg, rgb(237, 28, 36) 0%, rgb(237, 18, 96) 93%) !important;
        background-image: -webkit-linear-gradient(6deg, rgb(237, 28, 36) 0%, rgb(237, 18, 96) 93%) !important;
        background-image: -ms-linear-gradient(6deg, rgb(237, 28, 36) 0%, rgb(237, 18, 96) 93%) !important;
      }
    }
    @media only screen and (min-width:992px){
      .navbar-expand-lg{
        background:transparent;
      }
    }
    `
  ]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
