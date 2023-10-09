import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function validator(pattern: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const result = new RegExp(pattern).test(control.value);
    return result ? null : {pattern: {value: control.value}};
  }
}
