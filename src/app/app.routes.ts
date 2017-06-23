import {NgModule}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'arena', loadChildren: 'app/modules/arena/arena.module#ArenaModule'},
  {path: 'dungeon', loadChildren: 'app/modules/dungeon/dungeon.module#DungeonModule'},
  {path: 'login', loadChildren: 'app/modules/login/login.module#LoginModule'},
  {path: 'logOut', loadChildren: 'app/modules/log-out/log-out.module#LogOutModule'},
  {path: 'school', loadChildren: 'app/modules/school/school.module#SchoolModule'},
  {path: 'sign-up', loadChildren: 'app/modules/sign-up/sign-up.module#SignUpModule'},
  {path: 'store', loadChildren: 'app/modules/store/store.module#StoreModule'},
  {path: 'warlock', loadChildren: 'app/modules/warlock/warlock.module#WarlockModule'},
  {path: 'coming-soon', loadChildren: 'app/modules/coming-soon/coming-soon.module#ComingSoonModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
