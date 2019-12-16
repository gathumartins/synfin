import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { slideInAnimation } from './animations';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .carousel-caption{
        bottom:25%;
        left:6%;
      }
      .carousel-caption h5{
        font-size:1.5rem;
      }
      .contOne {
        min-height: 250px;
        padding-top: 50px;
        padding-bottom: 50px;
        background-color: #f6f6f6;
        background-image: url("../assets/img/watermarkone.png");
        background-repeat: no-repeat;
        background-position-x: right;
        background-position-y: bottom;
        background-size: 30%;
      }
      .homeHeads h1 {
        color: #fb3c3c;
        font-size: 2.0rem;
        font-weight: normal;
      }
      .homeHeads h1 span {
        font-weight: 1000;
        font-size: 2.5rem;
      }
      .contOne p {
        font-size: 1.2rem;
        line-height: 1.5;
      }
      .contTwo{
        min-height:200px;
        padding-top:75px;
        padding-bottom:75px;
        background:url('../assets/img/homesignbg.jpg');
        background-repeat:no-repeat;
        background-size:cover;
        background-position:center;
      }
      .contTwo h3{
        color:rgb(255, 255, 255);
        font-size:2.5rem;
      }
      .signUpHome{
        color:rgb(237, 28, 36);
        border-radius:20px;
        font-size:20px !important;
        box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.35);
      }
      .signUpHome:hover{
        background-image: -moz-linear-gradient(6deg, rgb(237, 28, 36) 0%, rgb(237, 18, 96) 93%) !important;
        background-image: -webkit-linear-gradient(6deg, rgb(237, 28, 36) 0%, rgb(237, 18, 96) 93%) !important;
        background-image: -ms-linear-gradient(6deg, rgb(237, 28, 36) 0%, rgb(237, 18, 96) 93%) !important;
        color:rgb(255, 255, 255);
      }
      .partnersSect {
        min-height: 150px;
        background: #f6f6f6;
        position: relative;
        padding-top: 50px;
        padding-bottom: 50px;
      }
      .featuresSect{
        padding-top:50px;
        padding-bottom:50px;
      }
      @media only screen and (min-width: 768px ){
       .carousel-caption{
          max-width:60%;
          bottom:40% !important;
          text-align:left;
          left:6%;
        }
        .carousel-caption h5{
          font-size:3rem;
          font-weight:bold;
          line-height:1.2;
        }
        .carousel-caption p{
          font-size:1.4rem;
        }
      }
      @media only screen and (min-width: 992px ){
        .carousel-caption{
          max-width:40%;
        }
      }
    `
  ],
  animations: [slideInAnimation]
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Home');
  }

  ngOnInit() {
    $(document).ready(() => {
      $('.carousel').carousel();
    });
    $('.multi-item-carousel').on('slide.bs.carousel', function(e) {
      // tslint:disable-next-line:one-variable-per-declaration
      const $e = $(e.relatedTarget),
        itemsPerSlide = 4,
        totalItems = $('.carousel-item', this).length,
        $itemsContainer = $('.carousel-inner', this),
        it = itemsPerSlide - (totalItems - $e.index());
      if (it > 0) {
        for (let i = 0; i < it; i++) {
          $('.carousel-item', this)
            .eq(e.direction === 'left' ? i : 0)
            // append slides to the end/beginning
            .appendTo($itemsContainer);
        }
      }
    });
  }
}
