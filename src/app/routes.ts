import { Routes } from "@angular/router";
import { CounterComponent } from "@features/features/counter/counter.component";
import { ZonesComponent } from "@features/features/zones/zones.component";
import { ChangeDetectionComponent } from "@features/features/change-detection/change-detection.component";
import { SuperCompComponent } from "@features/features/super-comp/super-comp.component";
import { TabsComponent } from "@features/features/tabs/tabs.component";

export const routes:Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'zone', component: ZonesComponent },
  { path: 'changedetection', component: ChangeDetectionComponent },
  { path: 'loop', component: SuperCompComponent },
  { path: 'messages', component: TabsComponent },
  { path: 'messages/:id', component: TabsComponent },
  { path: '**', component: SuperCompComponent }
]
