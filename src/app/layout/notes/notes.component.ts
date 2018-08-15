import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../model/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() notes: Note[];
  dataSource;
  displayedColumns: string[] = ['id', 'title', 'date'];

  constructor() { }

  ngOnInit() {
    this.dataSource = this.notes;
  }

}
