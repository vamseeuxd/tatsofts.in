import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tat-text-input',
  templateUrl: './tat-text-input.component.html',
  styleUrls: ['./tat-text-input.component.scss'],
})
export class TatTextInputComponent implements OnInit {
  @HostBinding('class') cssClass = 'd-block m-2 mb-3';
  @Input() type: string = 'email';
  @Input() id: string = 'exampleFormControlInput1';
  @Input() placeholder: string = 'name@example.com';
  @Input() size: string = 'md';
  @Input() disabled: boolean = false;
  @Input() invalid: boolean = false;
  @Input() valid: boolean = false;
  constructor() {}

  ngOnInit() {}
}
