import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-label-item',
  templateUrl: './label-item.component.html',
  styleUrls: ['./label-item.component.scss'],
})
export class LabelItemComponent implements OnInit {
  @Input() public label: AbstractControl;

  constructor() {}

  public ngOnInit(): void {
    console.log(this.label.value);
    console.log(this.label.get('id').value);
  }
}
