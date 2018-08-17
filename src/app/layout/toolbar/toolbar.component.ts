import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSideNav = new EventEmitter<void>();

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }

  openAddContactDialog() {
    const dialogRef = this.matDialog.open(NewContactDialogComponent, {
      minWidth: '50rem'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed. data submitted: ', result);
    });
  }

}
