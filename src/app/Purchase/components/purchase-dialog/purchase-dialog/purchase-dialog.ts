import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-purchase-dialog',
  imports: [],
  templateUrl: './purchase-dialog.html',
  styleUrl: './purchase-dialog.scss',
})
export class PurchaseDialog {
constructor(public dialog: MatDialog) {}

  openPurchaseModal() {
    this.dialog.open(PurchaseDialog, {
      width: '600px', 
      panelClass: 'custom-modal-container' 
    });
  }
}
