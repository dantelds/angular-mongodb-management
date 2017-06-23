import {NgModule}           from '@angular/core';
import {MenuComponent} from './menu.component';
import {RouterModule}        from '@angular/router';
import {CommonModule} from '@angular/common';
import {LinkModule} from '../link/link.module';

@NgModule({
  imports: [RouterModule, CommonModule, LinkModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class MenuModule {
  constructor() {
  }
}
