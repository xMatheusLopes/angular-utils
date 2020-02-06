import { Directive, ElementRef, HostListener, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appPhoneMask]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneMaskDirective),
      multi: true
    }
  ]
})
export class PhoneMaskDirective implements ControlValueAccessor{
  el: any;
  @Input() phone: string;

  constructor(el: ElementRef) {
    this.el = el;
  }

  @HostListener('keyup') onKeyUp() {
    const value = this.getValue();
    let mask = { 0: '(', 2: ') ' };
    let valueArr = value.split('');

    valueArr = this.validateLength(valueArr);
    mask = this.completeMask(valueArr, mask);

    const newValue = this.setNewValue(valueArr, mask);

    this.el.nativeElement.value = newValue;
    this.onChange(value);
  }

  getValue() {
    let value = this.el.nativeElement.value;
    value = value.match(/\d+/g);
    value = value.join('');

    return value;
  }

  validateLength(valueArr: []) {
    if (valueArr.length > 11) {
      delete valueArr[valueArr.length - 1];
    }

    return valueArr;
  }

  completeMask(valueArr: [], mask: any) {
    valueArr.length < 11 ? mask[6] = '-' : mask[7] = '-';
    return mask;
  }

  setNewValue(valueArr: [], mask: any) {
    let newValue = '';
    valueArr.forEach((value: string, index: number) => {
      newValue += mask[index] || '';
      newValue += value;
    });
    return newValue;
  }

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(val: string) {
    this.phone = val;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
