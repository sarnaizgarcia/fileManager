import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Sizes, Types, Color } from './button-types';

@Component({
    selector: 'fmg-button',
    templateUrl: 'button.component.html',
    styleUrls: ['button.component.css']
})

export class ButtonComponent {
    @Input()
    public size: Sizes = Sizes.BIG;
    
    @Input()
    public type: Types = Types.BUTTON;

    @Input()
    public color: Color = Color.PRIMARY;

    @Input()
    public disable: boolean = false;

    @Output()
    public buttonEvent: EventEmitter<void> = new EventEmitter<void> ()

    private emitButtonEvent() {
        if (!this.disable) {
            this.buttonEvent.emit()
        }
    }

    public onClick() {
        this.emitButtonEvent()
    }

    public onEnter(event) {
        if (event.key === 'ENTER') {
            this.emitButtonEvent()
        }
    }
}