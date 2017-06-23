import {NgModule}           from '@angular/core';
import {LogOutComponent} from "./log-out.component";
import {LogOutRoutingModule} from "./log-out-routing.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [LogOutComponent],
  imports: [LogOutRoutingModule, SharedModule]
})
export class LogOutModule {
  constructor() {
  }
}
