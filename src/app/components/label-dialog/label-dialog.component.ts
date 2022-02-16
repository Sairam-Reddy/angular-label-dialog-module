import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { labelDialog } from './models/label.model';

@Component({
  selector: 'app-label-dialog',
  templateUrl: './label-dialog.component.html',
  styleUrls: ['./label-dialog.component.scss'],
})
export class LabelDialogComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<LabelDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      labels: Array<labelDialog>;
    },
    private formBuilder: FormBuilder
  ) {}

  public ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      labels: this.formBuilder.array(
        this.data.labels.map((label: labelDialog) =>
          this.createLabelGroup(label)
        )
      ),
    });
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public ok(): void {
    this.dialogRef.close();
  }

  private createLabelGroup(label: labelDialog): FormGroup {
    return this.formBuilder.group({
      ...label,
      name: [label.name, Validators.required],
      id: [label.id],
      selected: [label.selected],
    });
  }
}
