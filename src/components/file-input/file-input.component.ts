import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';

import { Sizes, Color } from './file-input-types';

@Component({
  selector: 'fmg-file-input',
  templateUrl: 'file-input.component.html',
  styleUrls: ['file-input.component.css'],
})
export class FileInputComponent {
  public file: File | null = null;

  @Input()
  public size: Sizes = Sizes.SMALL;

  @Input()
  public color: Color = Color.PRIMARY;

  @Input()
  public disable: boolean = false;

  @ViewChild('inputField')
  public inputFile: ElementRef;

  @Output()
  public fileChange: EventEmitter<File> = new EventEmitter<File>();

  public takeFile(event) {
    this.file = event.target.files[0].name;
    this.fileChange.emit(event.target.files[0]);
  }

  public selectFile(event) {
    if (event.key === 'Enter') {
      this.inputFile.nativeElement.click();
    }
  }
}
