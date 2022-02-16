import { Component, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LabelsDialogComponent } from './components/labels-dialog/labels-dialog.component';
import { labelDialog } from './components/labels-dialog/models/label.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private labels: Array<labelDialog> = [
    { id: '1', name: 'Label 1', selected: false },
    { id: '2', name: 'Label 2', selected: true },
    { id: '3', name: 'Label 3', selected: true },
    { id: '4', name: 'Label 4', selected: false },
  ];

  constructor(private dialog: MatDialog) {}

  public openDialog(): void {
    this.dialog.open(LabelsDialogComponent, {
      data: {
        title: 'Window Labels',
        labels: this.labels,
      },
    });
  }
}
