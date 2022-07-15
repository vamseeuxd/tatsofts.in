import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TatTextInputModule } from './tat-text-input/tat-text-input.module';

@NgModule({
  imports: [BrowserModule, TatTextInputModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
