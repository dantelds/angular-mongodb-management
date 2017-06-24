import {NgModule}           from '@angular/core';
import {LoginRoutingModule} from './login-routing.module';
import { LoginComponent }    from './login.component';
import {SharedModule}   from '../../shared/shared.module';
import {InputModule} from '../../components/input/input.module';
import {ImageModule} from "../../components/image/image.module";




@NgModule({
  declarations:[LoginComponent],
  imports: [LoginRoutingModule, SharedModule, InputModule, ImageModule]
})
export class LoginModule {
  constructor(){
  }
}
