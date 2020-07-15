import { Component } from '@angular/core';

@Component({
    selector: 'fmg-home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    public onEvent() {
        console.log('Se ha pulsado el boton')
    }
}