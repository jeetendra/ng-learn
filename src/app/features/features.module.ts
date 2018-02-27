import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forFeature([CounterEffect])
  ],
  exports: [ SuperCompComponent ],
  providers: [
    StateService
  ],
  declarations: [SuperCompComponent, ChildCompComponent, HoverDirective, CounterComponent, ZonesComponent, ChangeDetectionComponent]
})
export class FeaturesModule { }
