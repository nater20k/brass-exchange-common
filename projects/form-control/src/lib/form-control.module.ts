import { NgModule } from '@angular/core';
import { FormControlComponent } from './form-control.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormControlComponent],
  imports: [ReactiveFormsModule],
  exports: [FormControlComponent],
})
export class FormControlModule {}
