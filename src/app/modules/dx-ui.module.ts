import { NgModule } from '@angular/core';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxPopupModule } from 'devextreme-angular/ui/popup';
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';
import { DxAutocompleteModule } from 'devextreme-angular/ui/autocomplete';
import { DxLoadPanelModule } from 'devextreme-angular/ui/load-panel'
 
const dxUi = [
  DxButtonModule,
  DxToolbarModule,
  DxTextBoxModule,
  DxPopupModule,
  DxScrollViewModule,
  DxAutocompleteModule,
  DxLoadPanelModule
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
