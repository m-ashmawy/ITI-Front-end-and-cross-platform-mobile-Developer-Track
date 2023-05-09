import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputFieldComponent } from './Components/input-field/input-field.component';
import { SliderComponent } from './Components/slider/slider.component';

@NgModule({
  declarations: [AppComponent, InputFieldComponent, SliderComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
