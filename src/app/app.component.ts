import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  app = "xay dung chuong trinh tinh tong 2 so"
  giatritong:any;
  // a:number;
  // b:number;
  // c:number;
  // delta:number;
  // x1:number;
  // x2:number;
  ngOnInit(){


  }
  giatritongChanged(giatritong){
    this.giatritong = giatritong;
  }

  // Tinh(){
  //   this.delta= (this.b*this.b)-4*this.a*this.c;
  //   if (this.delta==0) {
  //     alert("PT co nghiem kep")
  //     this.x1=this.x2= -this.b/2/this.a;
  //   }
  //   if (this.delta>0) {
  //     alert("PT co 2 nghiem phan biet")
  //     this.x1=-this.b+ Math.sqrt(this.delta)/2/this.a;
  //     this.x1=-this.b- Math.sqrt(this.delta)/2/this.a;
  //   }
  //   if (this.delta==0) {
  //     alert("PT co nghiem phuc")
  //   }
  // }

}







