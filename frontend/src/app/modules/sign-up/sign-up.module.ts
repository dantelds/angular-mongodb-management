import {NgModule}           from '@angular/core';
import {SignUpRoutingModule} from './sign-up-routing.module';
import { SignUpComponent }    from './sign-up.component';
import {SharedModule}   from '../../shared/shared.module';
import {InputModule} from '../../components/input/input.module';
import {SelectModule} from "../../components/select/select.module";

@NgModule({
  declarations:[SignUpComponent],
  imports: [SignUpRoutingModule, SharedModule, InputModule, SelectModule]
})
export class SignUpModule {
  constructor(){
  }
}
