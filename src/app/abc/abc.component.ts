import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  todo = ["Học TypeScript", "Học Angular", "Học HTML5"]; // Khai báo mảng dữ liệu
  constructor() { }

  ngOnInit(): void {
  }

}
