import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './button';
import { FileInputComponent } from './file-input';

const components = [ButtonComponent, FileInputComponent];

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [...components],
  declarations: [...components],
  providers: [],
})
export class ComponentsModule {}
