import { Component, Input, OnInit } from '@angular/core';
import { labelDialog } from '../models/label.model';
@Component({
  selector: 'app-label-item',
  templateUrl: './label-item.component.html',
  styleUrls: ['./label-item.component.scss'],
})
export class LabelItemComponent implements OnInit {
  @Input() public label: labelDialog;

  constructor() {}

  public ngOnInit(): void {}
}
