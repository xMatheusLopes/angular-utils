import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PhoneMaskDirective } from './utils/phone-mask.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './utils/components/checkbox/checkbox.component';
import { RadioComponent } from './utils/components/radio/radio.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PhoneMaskDirective,
    CheckboxComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
