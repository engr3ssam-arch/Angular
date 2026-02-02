import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
@Component({
  selector: 'app-config-component',
  imports: [MatButtonModule,MatDialogActions,MatDialogContent,MatDialogTitle],
  templateUrl: './config-component.html',
  styleUrl: './config-component.scss',
})
export class ConfigComponent {
  constructor(public dialogRef:MatDialogRef<ConfigComponent>){}
   closeDialog(value: string) {
  this.dialogRef.close(value); 
}

  }


