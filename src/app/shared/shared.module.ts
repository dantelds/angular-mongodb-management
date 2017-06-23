import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {TranslatePipe}   from './pipes/lang.pipe';


@NgModule({
    declarations:[TranslatePipe],
    exports: [TranslatePipe, FormsModule]
})
export class SharedModule {

}



