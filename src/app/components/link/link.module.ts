import {NgModule}           from '@angular/core';
import {RouterModule}        from '@angular/router';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {LinkComponent} from "./link.component";


@NgModule({
  imports: [RouterModule, CommonModule, SharedModule],
  declarations: [LinkComponent],
  exports: [LinkComponent],
})
export class LinkModule {
  constructor() {
  }
}
