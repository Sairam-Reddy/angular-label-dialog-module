import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { labelDialog } from './models/label.model';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-labels-dialog',
  templateUrl: './labels-dialog.component.html',
  styleUrls: ['./labels-dialog.component.scss'],
})
export class LabelsDialogComponent implements OnInit {
  public formArray: FormArray;
  public editItemIndex: number = -1;

  constructor(
    private dialogRef: MatDialogRef<LabelsDialogComponent>,
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
    console.log(this.formArray.value);
    this.dialogRef.close(this.formArray.value);
  }

  public getLabelFormGroups(): Array<FormGroup> {
    return this.formArray.controls as Array<FormGroup>;
  }

  public onEditStarted(index: number): void {
    this.editItemIndex = index;
    this.formArray.controls.forEach(
      (control: AbstractControl, index: number) => {
        if (this.editItemIndex !== index) {
          control.disable();
        }
      }
    );
  }

  public onEditFinished(): void {
    this.editItemIndex = -1;
    this.formArray.controls.forEach(
      (control: AbstractControl, index: number) => {
        control.enable();
      }
    );
  }

  public onDeleted(index: number): void {
    this.formArray.removeAt(index);
    this.editItemIndex = -1;
    this.formArray.controls.forEach(
      (control: AbstractControl, index: number) => {
        control.enable();
      }
    );
  }

  public addLabel(): void {
    const newIndex: number = this.formArray.controls.length;
    this.formArray.push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        id: new FormControl(newIndex),
        selected: new FormControl(false),
      })
    );
    this.onEditStarted(newIndex);
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
