import { FormGroup } from '@angular/forms';
import { Instrument } from '@nater20k/brass-exchange-instruments';

export class UserFormGroup {
  constructor(public formGroup: FormGroup) {}

  get email(): string {
    return this.formGroup.get('email') ? this.formGroup.get('email').value : '';
  }

  get password(): string {
    return this.formGroup.get('password')
      ? this.formGroup.get('password').value
      : '';
  }

  get displayName(): string {
    return this.formGroup.get('displayName')
      ? this.formGroup.get('displayName').value
      : '';
  }

  get firstName(): string {
    return this.formGroup.get('firstName')
      ? this.formGroup.get('firstName').value
      : '';
  }

  get lastName(): string {
    return this.formGroup.get('lastName')
      ? this.formGroup.get('lastName').value
      : '';
  }

  get instrumentsListed(): Instrument[] {
    return this.formGroup.get('instrument')
      ? this.formGroup.get('instrument').value
      : [];
  }

  get rating(): number {
    return this.formGroup.get('rating')
      ? this.formGroup.get('rating').value
      : '';
  }

  get dateAccountCreated(): Date {
    return this.formGroup.get('dateAccountCreated') &&
      this.formGroup.get('dateAccountCreated').value !== ''
      ? this.formGroup.get('dateAccountCreated').value
      : new Date();
  }

  get photoUrl(): string {
    return this.formGroup.get('photoUrl') &&
      this.formGroup.get('photoUrl').value !== ''
      ? this.formGroup.get('photoUrl').value
      : 'https://t4.ftcdn.net/jpg/00/64/67/63/240_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg';
  }

  get principalInstrument(): string {
    return this.formGroup.get('instrument').value || '';
  }
}
