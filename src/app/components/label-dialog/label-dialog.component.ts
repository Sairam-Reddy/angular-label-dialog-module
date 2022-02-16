import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { labelDialog } from './models/label.model';

@Component({
  selector: 'app-label-dialog',
  templateUrl: './label-dialog.component.html',
  styleUrls: ['./label-dialog.component.scss'],
})
export class LabelDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<LabelDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      labels: Array<labelDialog>;
    }
  ) {}

  public ngOnInit(): void {}

  public cancel(): void {
    this.dialogRef.close();
  }

  public ok(): void {
    this.dialogRef.close();
  }
}
