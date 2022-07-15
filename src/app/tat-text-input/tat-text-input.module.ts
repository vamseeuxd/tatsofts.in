import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TatTextInputComponent } from './tat-text-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TatTextInputComponent],
  exports: [TatTextInputComponent],
})
export class TatTextInputModule {}
