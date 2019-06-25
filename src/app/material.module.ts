import {NgModule} from '@angular/core';
import {MatButtonModule, MatDividerModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

const moduleElements =
  [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ];

@NgModule({
  imports: moduleElements,
  exports: moduleElements
})
export class MaterialModule {
}
