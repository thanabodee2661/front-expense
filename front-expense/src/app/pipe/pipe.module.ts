import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatPipe } from './format/format.pipe';

@NgModule({
  declarations: [
    FormatPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatPipe
  ]
})
export class PipeModule { }
