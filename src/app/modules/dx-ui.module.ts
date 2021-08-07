import { NgModule } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';

const dxUi = [
  DxButtonModule,
  DxToolbarModule,
  DxTextBoxModule
]

@NgModule({
  imports: [
    dxUi
  ],
  exports: [
    dxUi
  ]
})
export class DxUiModule { }
