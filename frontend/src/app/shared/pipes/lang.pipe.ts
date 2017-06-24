import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '../../services/language.service'; // our translate service

@Pipe({
  name: 'translate',
  pure: false
})

export class TranslatePipe implements PipeTransform {

  constructor(private _translate: TranslateService) {
  }

  transform(value: string, args: any[]): any {
    if (!value) return;
    return this._translate.instant(value);
  }
}
