import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import {SharedModule} from './shared/shared.module';

import {ArenaModule} from './modules/arena/arena.module';
import {ComingSoonModule} from './modules/coming-soon/coming-soon.module';
import {DungeonModule} from './modules/dungeon/dungeon.module';
import {LoginModule} from './modules/login/login.module';
import {SchoolModule} from './modules/school/school.module';
import {SignUpModule} from './modules/sign-up/sign-up.module';
import {StoreModule} from './modules/store/store.module';
import {WarlockModule} from './modules/warlock/warlock.module';


import {AppRoutingModule} from './app.routes';


import {TRANSLATION_PROVIDERS}   from './language/lang';
import {TranslateService}   from './services/language.service';
import {GeneralService} from './services/general.service';

import {AppComponent}  from './app.component';
import {MenuModule} from './components/menu/menu.module';
import {LogOutModule} from "./modules/log-out/log-out.module";
import {FooterModule} from "./components/footer/footer.module";


@NgModule({
  imports: [ArenaModule, ComingSoonModule, DungeonModule, FooterModule, LoginModule, LogOutModule, MenuModule, SchoolModule, SharedModule, SignUpModule, StoreModule, WarlockModule, FormsModule, BrowserModule, HttpModule, JsonpModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [GeneralService, TRANSLATION_PROVIDERS, TranslateService]
})
export class AppModule {
}
