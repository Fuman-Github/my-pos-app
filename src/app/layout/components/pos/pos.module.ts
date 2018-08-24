import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos.component';
import { ScreenComponent } from './screen/screen.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    PosRoutingModule
  ],
  declarations: [PosComponent, ScreenComponent, MenuComponent]
})
export class PosModule { }
