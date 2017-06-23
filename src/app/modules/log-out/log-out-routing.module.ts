import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import {LogOutComponent} from "./log-out.component";


@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: LogOutComponent }
  ])],
  exports: [RouterModule]
})
export class LogOutRoutingModule {}
