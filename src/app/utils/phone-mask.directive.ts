import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {
  el: any;

  constructor(el: ElementRef) {
    this.el = el;
  }

  @HostListener('keyup') onKeyUp() {
    let value = this.el.nativeElement.value;
    value = value.match(/\d+/g);
    value = value.join('');

    const mask = {
      0: '(',
      2: ') '
    };

    const valueArr = value.split('');

    if (valueArr.length > 11) {
      delete valueArr[valueArr.length - 1];
    }

    valueArr.length < 11 ? mask[6] = '-' : mask[7] = '-';

    let newValue = '';

    // tslint:disable-next-line: no-shadowed-variable
    valueArr.forEach((value: string, index: number) => {
      newValue += mask[index] || '';
      newValue += value;
    });

    this.el.nativeElement.value = newValue;
  }
}
