import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { extend } from 'webdriver-js-extender';
import { EducationCalculatorComponent } from './education-calculator/education-calculator.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  bsModalRef: BsModalRef;
  title = 'app';

  constructor(
    private modalService: BsModalService
  ) { }

  public ngOnInit() {
    this.bsModalRef = this.modalService.show(EducationCalculatorComponent);
  }

  public ngOnDestroy () {

  }
}
