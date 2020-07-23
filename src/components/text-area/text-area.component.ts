import { Component, Input } from '@angular/core';

@Component({
  selector: 'fmg-text-area',
  templateUrl: 'text-area.component.html',
  styleUrls: ['text-area.component.css'],
})
export class TextAreaComponent {
  @Input()
  public placeholder: String = 'Say something nice';
}
