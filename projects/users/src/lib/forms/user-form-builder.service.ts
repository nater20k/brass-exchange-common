import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControlService } from '@nater20k/form-control';
@Injectable({
  providedIn: 'root',
})
export class UserFormBuilderService {
  constructor(private fb: FormBuilder, private fc: FormControlService) {}

  emailAndPasswordLoginForm(): FormGroup {
    return this.fb.group({
      email: this.fc.fetchRequiredEmailFormControl(),
      password: this.fc.fetchMinLengthFormControl(8),
    });
  }

  registrationForm(): FormGroup {
    return this.fb.group({
      email: this.fc.fetchRequiredEmailFormControl(),
      password: this.fc.fetchMinLengthFormControl(8),
      confirmPassword: this.fc.fetchMinLengthFormControl(8),
      displayName: this.fc.fetchRequiredFormControl(),
      firstName: this.fc.fetchRequiredFormControl(),
      lastName: this.fc.fetchRequiredFormControl(),
      instrument: this.fc.fetchBasicFormControl(),
    });
  }
}
