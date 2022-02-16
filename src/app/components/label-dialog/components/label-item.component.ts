import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-label-item',
  templateUrl: './label-item.component.html',
  styleUrls: ['./label-item.component.scss'],
})
export class LabelItemComponent implements OnInit {
  @Input() public label: FormGroup;

  constructor() {}

  public ngOnInit(): void {}
}
