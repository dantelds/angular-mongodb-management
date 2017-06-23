import {NgModule}           from '@angular/core';
import {FooterComponent} from './footer.component';
import {RouterModule}        from '@angular/router';
import {CommonModule} from '@angular/common';
import {LinkModule} from '../link/link.module';

@NgModule({
  imports: [RouterModule, CommonModule, LinkModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {
  constructor() {
  }
}
