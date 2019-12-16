import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    `
    .myFooter{
      background:rgb(0, 38, 58);
      min-height: 330px;
      padding-top:40px;
      padding-bottom:0px;
      color:rgb(255, 255, 255);
    }
    .footTopCont{
      margin-bottom:20px;
    }
    .footTopCont h3{
      font-size:1.4rem;
      line-height:1.8rem;
    }
    .footTopCont p{
      font-size:1.0rem;
    }
    .footLinks{
      padding-inline-start: 0px;
      -webkit-padding-inline-start: 0px;
      -moz-padding-inline-start: 0px;
      -o-padding-inline-start: 0px;
    }
    .footLinks li{
      list-style:none;
    }
    .footLinks li a{
      color:rgb(255, 255, 255);
      font-size:1.0rem;
      line-height:2rem;
    }
    .socialLinks{
      margin-top:1.3rem;
      padding-inline-start: 0px;
      -webkit-padding-inline-start: 0px;
      -moz-padding-inline-start: 0px;
      -o-padding-inline-start: 0px;
    }
    .socialLinks li{
      list-style:none;
      display:inline-block;
      background:rgb(255, 255, 255);
      margin-right:1rem;
      width: 40px;
      height: 40px;
      border-radius:50%;
    }
    .socialLinks li a{
      color:rgb(0, 38, 58);
      font-size:1.5rem;
      padding-top:8px;
    }
    .socialLinks li a:hover{
      text-decoration:none;
    }
    .footBtm{
      border-top:1px solid #fff;
      padding:20px 0px 0px;
    }
    .footCopy{
      font-size:0.5rem !important;
    }
    .footCopy p{
      font-size:0.5rem !important;
    }
    .copyLinks{
      -webkit-padding-inline-start: 0px;
      -moz-padding-inline-start: 0px;
      -o-padding-inline-start: 0px;
    }
    .copyLinks li{
      list-style:none;
      display:inline-block;
      margin-right:1rem;
    }
    .copyLinks li a{
      color:#fff;
      font-size:1rem !important;
    }
    @mdia only screen and (max-width:991px){
      .footCopy{
        text-align:center !important;
      }
      .footCopy p{
        text-align:center;
      }
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
