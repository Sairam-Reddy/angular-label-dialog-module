import { Component, VERSION } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LabelDialogComponent } from './components/label-dialog/label-dialog.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private dialog: MatDialog) {}

  public openDialog(): void {
    this.dialog.open(LabelDialogComponent, {
      data: {},
    });
  }
}
