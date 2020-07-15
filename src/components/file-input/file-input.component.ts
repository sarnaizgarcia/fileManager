import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'fmg-file-input',
    templateUrl: 'file-input.component.html',
    styleUrls: ['file-input.component.css']
})

export class FileInputComponent {
    @Output()
    public fileInputEvent: EventEmitter<void> = new EventEmitter<void> ();

    private emitFileInputEvent() {
        this.fileInputEvent.emit();
    }

    public onClick() {
        console.log('uploadOnClick')
        this.emitFileInputEvent();
    }

    public onEnter(event) {
        console.log('uploadEnter')
        if (event.key === 'ENTER') {
            this.emitFileInputEvent();
        }
    }
}