import {ModuleWithProviders, NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [],

  exports: [FlexLayoutModule,
    MaterialModule]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
      ]
    };
  }
}
