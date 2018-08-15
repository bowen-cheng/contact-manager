import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { LayoutComponent } from './layout.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NotesComponent } from './notes/notes.component';
import { SideNavComponent } from './sidenav/side-nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

const route: Routes = [
  { path: 'contacts/:id', component: MainContentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(route)
  ],
  declarations: [
    MainContentComponent,
    SideNavComponent,
    ToolbarComponent,
    LayoutComponent,
    NotesComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {}
