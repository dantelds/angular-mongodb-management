import {NgModule}           from '@angular/core';
import {WarlockRoutingModule} from './warlock-routing.module';
import { WarlockComponent }    from './warlock.component';
import {SharedModule}   from '../../shared/shared.module';
import {GearModule} from "../../components/gear/gear.module";
import {ImageModule} from "../../components/image/image.module";


@NgModule({
  declarations:[WarlockComponent],
  imports: [WarlockRoutingModule, SharedModule, GearModule, ImageModule]
})
export class WarlockModule {
  constructor(){
  }
}
