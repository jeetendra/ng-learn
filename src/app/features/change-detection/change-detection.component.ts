import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent implements OnInit {
  counter:number = 0;
  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit() {
    this.cd.detach()
  }

  increment() {
    this.counter++;
  }

  update() {
    this.cd.detectChanges();

  }

}
