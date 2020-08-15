import { Injectable } from '@angular/core';
import { FormControl, Validators, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormControlService {
  constructor() {}

  fetchRequiredFormControl(oldValue?: string | number): FormControl {
    return new FormControl(oldValue ? oldValue : '', [Validators.required]);
  }

  fetchRequiredEmailFormControl(oldValue?: string): FormControl {
    return new FormControl(oldValue ? oldValue : '', [
      Validators.required,
      Validators.email,
    ]);
  }

  fetchMaxLengthFormControl(length: number, oldValue?: string): FormControl {
    return new FormControl(oldValue ? oldValue : '', [Validators.max(length)]);
  }

  fetchMinLengthFormControl(length: number, oldValue?: string): FormControl {
    return new FormControl(oldValue ? oldValue : '', [Validators.min(length)]);
  }

  fetchBasicFormControl(oldValue?: any): FormControl {
    return new FormControl(oldValue ? oldValue : '');
  }

  fetchBasicFormArray(items?: string[]): FormArray {
    let itemsControlArray: FormArray = new FormArray([]);
    if (items) {
      items.forEach((item) => {
        itemsControlArray.push(new FormControl(item));
      });
    }
    return itemsControlArray;
  }
}
