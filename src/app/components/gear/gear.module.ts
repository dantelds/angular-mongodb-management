import {NgModule}           from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {GearComponent} from "./gear.component";
import {ImageModule} from "../image/image.module";


@NgModule({
  imports:[CommonModule, SharedModule, ImageModule],
  declarations:[GearComponent],
  exports:[GearComponent],
})
export class GearModule {
  constructor(){
  }
}
