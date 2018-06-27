import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EducationCalculatorComponent } from './education-calculator/education-calculator.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    EducationCalculatorComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  providers: [
    BsModalService
  ],
  bootstrap: [AppComponent],
  entryComponents: [EducationCalculatorComponent]
})
export class AppModule { }
