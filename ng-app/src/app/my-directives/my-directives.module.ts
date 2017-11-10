import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SetColorDirective} from "./set-color-directives";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SetColorDirective],
  declarations: [SetColorDirective]
})
export class MyDirectivesModule { }
