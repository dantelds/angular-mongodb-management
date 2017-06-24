import {NgModule}           from '@angular/core';
import {DungeonRoutingModule} from './dungeon-routing.module';
import { DungeonComponent }    from './dungeon.component';



@NgModule({
  declarations:[DungeonComponent],
  imports: [DungeonRoutingModule]
})
export class DungeonModule {
  constructor(){
  }
}
