import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-label-item',
  templateUrl: './label-item.component.html',
  styleUrls: ['./label-item.component.scss'],
})
export class LabelItemComponent implements OnInit {
  @Input() public label: FormGroup;
  @Input() public isInEditMode: boolean;

  @Output() public onEditStarted: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onEditFinished: EventEmitter<void> =
    new EventEmitter<void>();
  @Output() public onDeleted: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  public ngOnInit(): void {}

  public onEdit(): void {
    this.onEditStarted.emit();
  }

  public onSave(): void {
    this.onEditFinished.emit();
  }

  public onDelete(): void {
    this.onDeleted.emit();
  }

  public onDiscard(): void {
    this.onEditFinished.emit();
  }
}
