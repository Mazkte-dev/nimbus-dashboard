import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-error-dialog',
  standalone: true,
  template: `<h1 mat-dialog-title>Error</h1>
  <div mat-dialog-content>
    <p>{{ data.message }}</p>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="close()">Close</button>
  </div>`,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatButton,
    MatDialogActions
  ],
  styles: [`
    h1 {
      color: red;
    }
  `]
})
export class ErrorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string } ,
              private dialogRef: MatDialogRef<ErrorDialogComponent>) {
  }


  close() {
    this.dialogRef.close()
  }
}
