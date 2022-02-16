import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { labelDialog } from './models/label.model';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-label-dialog',
  templateUrl: './label-dialog.component.html',
  styleUrls: ['./label-dialog.component.scss'],
})
export class LabelDialogComponent implements OnInit {
  public formArray: FormArray;

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
    this.formArray = this.formBuilder.array(
      this.data.labels.map((label: labelDialog) => this.createLabelGroup(label))
    );
  }

  public cancel(): void {
    this.dialogRef.close();
  }

  public ok(): void {
    this.dialogRef.close();
  }

  public getLabelFormGroups(): Array<FormGroup> {
    return this.formArray.controls as Array<FormGroup>;
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
