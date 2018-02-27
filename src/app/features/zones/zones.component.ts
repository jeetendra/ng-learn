import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {
  currentState:number = 0;
  constructor(private zone: NgZone) { }

  ngOnInit() {
  }

  runOutsideZone() {
    this.zone.runOutsideAngular(() => {
      let intervalId:any = setInterval(()=>{
        this.currentState++;
        this.zone.run(()=>{}); // work like as $apply
      },100);
      setTimeout(()=>{
        clearInterval(intervalId);

      }, 3000);

    })
  }

}
