import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { SchoolComponent }    from './school.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: SchoolComponent }
  ])],
  exports: [RouterModule]
})
export class SchoolRoutingModule {}
