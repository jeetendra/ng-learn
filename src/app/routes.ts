import { ChangeDetectionComponent } from './features/change-detection/change-detection.component';
import { SuperCompComponent } from './features/super-comp/super-comp.component';
import { ZonesComponent } from './features/zones/zones.component';
import { CounterComponent } from './features/counter/counter.component';
import { Routes } from "@angular/router";

export const routes:Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'zone', component: ZonesComponent },
  { path: 'changedetection', component: ChangeDetectionComponent },
  { path: 'loop', component: SuperCompComponent },
  { path: '**', component: SuperCompComponent }
]
