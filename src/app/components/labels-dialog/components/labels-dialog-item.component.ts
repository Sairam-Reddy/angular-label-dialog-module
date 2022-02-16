import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-labels-dialog-item',
  templateUrl: './labels-dialog-item.component.html',
  styleUrls: ['./labels-dialog-item.component.scss'],
})
export class LabelsDialogItemComponent implements OnInit {
  @Input() public label: FormGroup;
  @Input() public isInEditMode: boolean = false;

  @Output() public onEditStarted: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onEditFinished: EventEmitter<void> =
    new EventEmitter<void>();
  @Output() public onDeleted: EventEmitter<void> = new EventEmitter<void>();

  private initialValue: string;

  constructor() {}

  public ngOnInit(): void {
    this.initialValue = this.label.get('name').value;
  }

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
    if (this.initialValue) {
      this.label.get('name').reset(this.initialValue);
      this.onEditFinished.emit();
    } else {
      this.onDeleted.emit();
    }
  }
}
