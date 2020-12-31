import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControlService } from '@nater20k/form-control';
import { Instrument } from '../instrument';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  constructor(protected fb: FormBuilder, protected fc: FormControlService) {}

  createInstrumentFormGroup(): FormGroup {
    return this.fb.group({
      title: this.fc.fetchRequiredFormControl(),
      type: this.fc.fetchRequiredFormControl(),
      brand: this.fc.fetchRequiredFormControl(),
      model: this.fc.fetchRequiredFormControl(),
      price: this.fc.fetchRequiredFormControl(),
      key: this.fc.fetchBasicFormControl(),
      keyModifier: this.fc.fetchBasicFormControl(),
      manufactureDate: this.fc.fetchRequiredFormControl(),
      sellerEmail: this.fc.fetchRequiredFormControl(),
      isSold: this.fc.fetchBasicFormControl(),
      location: this.fb.group({
        streetAddress: this.fc.fetchBasicFormControl(),
        city: this.fc.fetchRequiredFormControl(),
        state: this.fc.fetchRequiredFormControl(),
        zip: this.fc.fetchRequiredFormControl(),
      }),
      isCaseIncluded: this.fc.fetchBasicFormControl(),
      description: this.fc.fetchBasicFormControl(),
      photoUrls: this.fc.fetchBasicFormArray(),
      valveCount: this.fc.fetchBasicFormControl(),
      finish: this.fc.fetchBasicFormControl(),
      boreSize: this.fc.fetchBasicFormControl(),
      size: this.fc.fetchBasicFormControl(),
    });
  }

  updateInstrumentForm(instrument: Partial<Instrument>): FormGroup {
    const {
      price,
      brand,
      key,
      manufactureDate,
      sellerEmail,
      isCaseIncluded,
      location,
      description,
      photoUrls,
      type,
      valveCount,
      finish,
      boreSize,
      size,
    } = instrument;
    return this.fb.group({
      type: this.fc.fetchRequiredFormControl(type),
      brand: this.fc.fetchRequiredFormControl(brand),
      price: this.fc.fetchRequiredFormControl(price),
      key: this.fc.fetchBasicFormControl(key),
      manufactureDate: this.fc.fetchBasicFormControl(manufactureDate),
      sellerEmail: this.fc.fetchRequiredEmailFormControl(sellerEmail),
      location: this.fb.group({
        streetAddress: this.fc.fetchBasicFormControl(location.streetAddress),
        city: this.fc.fetchRequiredFormControl(location.city),
        state: this.fc.fetchRequiredFormControl(location.state),
        zip: this.fc.fetchRequiredFormControl(location.zip),
      }),
      isCaseIncluded: this.fc.fetchBasicFormControl(isCaseIncluded),
      description: this.fc.fetchBasicFormControl(description),
      photoUrls: this.fc.fetchBasicFormArray(photoUrls),
      valveCount: this.fc.fetchBasicFormControl(valveCount),
      finish: this.fc.fetchBasicFormControl(finish),
      boreSize: this.fc.fetchBasicFormControl(boreSize),
      size: this.fc.fetchBasicFormControl(size),
    });
  }

  createInstrumentForSaleFormGroup(): FormGroup {
    return this.fb.group({
      type: this.fc.fetchRequiredFormControl(),
      price: this.fc.fetchRequiredFormControl(),
      brand: this.fc.fetchRequiredFormControl(),
      model: this.fc.fetchRequiredFormControl(),
      key: this.fc.fetchBasicFormControl(),
      keyModifier: this.fc.fetchBasicFormControl(),
      manufactureDate: this.fc.fetchBasicFormControl(),
      location: this.fb.group({
        streetAddress: this.fc.fetchBasicFormControl(),
        city: this.fc.fetchBasicFormControl(),
        state: this.fc.fetchBasicFormControl(),
        zip: this.fc.fetchRequiredFormControl(),
      }),
      isCaseIncluded: this.fc.fetchRequiredFormControl(),
      description: this.fc.fetchBasicFormControl(),
      photoUrls: this.fb.array([]),
      valveCount: this.fc.fetchBasicFormControl(),
      finish: this.fc.fetchBasicFormControl(),
      boreSize: this.fc.fetchBasicFormControl(),
      size: this.fc.fetchBasicFormControl(),
      sellerEmail: this.fc.fetchBasicFormControl(),
      sellerUsername: this.fc.fetchBasicFormControl(),
      isActive: this.fc.fetchBasicFormControl(),
      views: this.fc.fetchBasicFormControl(),
      favorites: this.fc.fetchBasicFormControl(),
      dateCreated: this.fc.fetchBasicFormControl(),
      isSold: this.fc.fetchBasicFormControl(),
      isShippingAvailable: this.fc.fetchRequiredFormControl(),
    });
  }
}
