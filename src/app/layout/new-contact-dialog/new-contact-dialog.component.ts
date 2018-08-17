import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { User } from '../../model/user';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.css']
})
export class NewContactDialogComponent implements OnInit {

  protected user: User;
  protected avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.user = new User();
  }

  save() {
    const message = 'New contact saved! See console for details.';
    const action = 'Dismiss';
    this.snackBar.open(message, action, {
      duration: 2000,
    }).onAction().subscribe(() => {
      console.log('The MatSnackBar is closed by clicking the "Dismiss" button');
    });
    this.dialogRef.close(this.user);

  }

  close() {
    const message = 'Change discarded';
    const action = 'Dismiss';
    this.snackBar.open(message, action, {
      duration: 2000,
    }).onAction().subscribe(() => {
      console.log('The MatSnackBar is closed by clicking the "Dismiss" button');
    });
    this.dialogRef.close(undefined);
  }

}
