import { FormGroup } from '@angular/forms';

export class InstrumentFormGroup {
  constructor(public formGroup: FormGroup) {}

  get type(): string {
    return this.formGroup.get('type').value || '';
  }

  get price(): number {
    return this.formGroup.get('price').value || '';
  }

  get brand(): string {
    return this.formGroup.get('brand').value || '';
  }

  get model(): string {
    return this.formGroup.get('model').value || '';
  }

  get key(): string {
    return this.formGroup.get('key').value || '';
  }

  get modifier(): string {
    return this.formGroup.get('keyModifier').value || '';
  }

  get manufactureDate(): Date {
    return this.formGroup.get('manufactureDate').value || '';
  }

  get isCaseIncluded(): boolean {
    return this.formGroup.get('isCaseIncluded').value || '';
  }

  get description(): string {
    return this.formGroup.get('description').value || '';
  }

  get streetAddress(): string {
    return this.formGroup.get('location.streetAddress').value || '';
  }

  get city(): string {
    return this.formGroup.get('location.city').value || '';
  }

  get state(): string {
    return this.formGroup.get('location.state').value || '';
  }

  get zip(): string {
    return this.formGroup.get('location.zip').value || '';
  }

  get photoUrls(): string[] {
    return this.formGroup.get('photoUrls').value || [''];
  }

  get valveCount(): number {
    return this.formGroup.get('valveCount').value || 3;
  }

  get finish(): 'raw' | 'silver' | 'lacquer' {
    return this.formGroup.get('finish').value || '';
  }

  get boreSize(): number {
    return this.formGroup.get('boreSize').value || '';
  }

  get size(): '3/4' | '4/4' | '5/4' | '6/4' {
    return this.formGroup.get('size').value || '';
  }

  get sellerEmail(): string {
    return this.formGroup.get('sellerEmail').value || '';
  }
}

export class ForSaleInstrumentListingFormGroup extends InstrumentFormGroup {
  constructor(public formGroup: FormGroup) {
    super(formGroup);
  }

  get title(): string {
    return this.formGroup.get('title').value || '';
  }

  get views(): number {
    return this.formGroup.get('title').value || 0;
  }

  get favorites(): number {
    return this.formGroup.get('title').value || 0;
  }

  get dateCreated(): Date {
    return this.formGroup.get('title').value || new Date();
  }

  get isActive(): boolean {
    return this.formGroup.get('isActive').value || false;
  }

  get isSold(): boolean {
    return this.formGroup.get('isSold').value || false;
  }

  get isShippingAvailable(): boolean {
    return this.formGroup.get('isShippingAvailable').value || false;
  }
}
