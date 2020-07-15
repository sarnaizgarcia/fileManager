// Definimos lo que compone home, ie, sus piezas

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home-router.module';
import { ComponentsModule } from '../../components'

@NgModule({
    imports: [HomeRouterModule, CommonModule, ComponentsModule],
    exports: [HomeRouterModule],
    declarations: [HomeComponent],
})
export class HomeModule { }
