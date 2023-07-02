import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateSrv: TranslateService){}

  transform(value: any): any {
    return this.translateSrv.getTranslate(value) ? this.translateSrv.getTranslate(value) : '';
  }

}
