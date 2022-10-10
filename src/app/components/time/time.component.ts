import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  constructor() { }

  time_and_date;

  ngOnInit() {
    setInterval(()=>{
      this.time_and_date = new Date();
    },1000);
  }

}
