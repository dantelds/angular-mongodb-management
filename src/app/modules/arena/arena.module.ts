import {NgModule}           from '@angular/core';
import {ArenaRoutingModule} from './arena-routing.module';
import {ArenaComponent}    from './arena.component';


@NgModule({
  declarations: [ArenaComponent],
  imports: [ArenaRoutingModule]
})
export class ArenaModule {
  constructor() {
  }
}
