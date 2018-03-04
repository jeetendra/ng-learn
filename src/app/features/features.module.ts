import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SuperCompComponent } from './super-comp/super-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { HoverDirective } from './hover.directive';
import { StateService } from './state.service';
import { CounterComponent } from './counter/counter.component';

import { StoreModule } from '@ngrx/store';
import { reducers  } from './counter/counter.reducer';

import { EffectsModule } from '@ngrx/effects';
import { CounterEffect } from './counter/counter.effect';
import { ZonesComponent } from './zones/zones.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forFeature([CounterEffect])
  ],
  exports: [ SuperCompComponent ],
  providers: [
    StateService
  ],
  declarations: [SuperCompComponent, ChildCompComponent, HoverDirective, CounterComponent, ZonesComponent, ChangeDetectionComponent, TabsComponent]
})
export class FeaturesModule { }
