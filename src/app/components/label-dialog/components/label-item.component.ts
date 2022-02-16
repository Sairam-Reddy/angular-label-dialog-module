import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-label-item',
  templateUrl: './label-item.component.html',
  styleUrls: ['./label-item.component.scss'],
})
export class LabelItemComponent implements OnInit {
  @Input() public label: FormGroup;
  @Input() public index: number;
  @Input() public isInEditMode: boolean;

  @Output() public onEditStarted: EventEmitter<number> =
    new EventEmitter<number>();
  @Output() public onEditFinished: EventEmitter<number> =
    new EventEmitter<number>();
  @Output() public onDeleted: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  public ngOnInit(): void {}

  public onEdit(): void {
    this.onEditStarted.emit(this.index);
  }

  public onSave(): void {
    this.onEditFinished.emit(this.index);
  }

  public onDelete(): void {
    this.onDeleted.emit(this.index);
  }

  public onDiscard(): void {
    this.onEditFinished.emit(this.index);
  }
}
