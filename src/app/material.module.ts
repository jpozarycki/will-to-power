import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

const moduleElements =
  [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatCardModule
  ];

@NgModule({
  imports: moduleElements,
  exports: moduleElements
})
export class MaterialModule {
}
