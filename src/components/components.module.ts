import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button';

const components = [ButtonComponent];

@NgModule({
    imports: [CommonModule],
    exports: [...components],
    declarations: [...components],
    providers: [],
})
export class ComponentsModule { }
