import {NgModule} from '@angular/core';
import {MatSidenavModule, MatToolbarModule} from '@angular/material';

const moduleElements =
  [
    MatSidenavModule,
    MatToolbarModule
  ];

@NgModule({
  imports: moduleElements,
  exports: moduleElements
})
export class MaterialModule {
}
