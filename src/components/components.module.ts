import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './button';
import { FileInputComponent } from './file-input';
import { TextAreaComponent } from './text-area';

const components = [ButtonComponent, FileInputComponent, TextAreaComponent];

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [...components],
  declarations: [...components],
  providers: [],
})
export class ComponentsModule {}
