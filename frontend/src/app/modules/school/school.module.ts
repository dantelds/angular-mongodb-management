import {NgModule}           from '@angular/core';
import {SchoolRoutingModule} from './school-routing.module';
import {SchoolComponent}    from './school.component';
import {SharedModule} from "../../shared/shared.module";
import {ImageModule} from "../../components/image/image.module";


@NgModule({
  declarations: [SchoolComponent],
  imports: [SchoolRoutingModule, SharedModule, ImageModule]
})
export class SchoolModule {
  constructor() {
  }
}
