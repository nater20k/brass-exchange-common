import { NgModule } from '@angular/core';
import { InstrumentsComponent } from './instruments.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InstrumentsComponent],
  imports: [ReactiveFormsModule],
  providers: [],
  exports: [InstrumentsComponent],
})
export class InstrumentsModule {}
