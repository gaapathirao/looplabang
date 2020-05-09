import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-page',
  templateUrl: './loop-page.component.html',
  styleUrls: ['./loop-page.component.css'],
})
export class LoopPageComponent implements OnInit {
  constructor() {}
  year: number;
  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }
}
