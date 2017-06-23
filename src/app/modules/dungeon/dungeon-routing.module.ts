import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { DungeonComponent }    from './dungeon.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: DungeonComponent }
  ])],
  exports: [RouterModule]
})
export class DungeonRoutingModule {}
