import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule, MatCardModule } from '@angular/material';

import { FilesRoutingModule } from './files-routing.module';
import { FilesListComponent } from './components/files-list/files-list.component';
import { FilesService } from './services/files.service';
import { ListViewItemComponent } from './components/list-view-item/list-view-item.component';
import { FileSanitizerPipe } from './pipes/file-sanitizer.pipe';

@NgModule({
  declarations: [FilesListComponent, ListViewItemComponent, FileSanitizerPipe],
  imports: [CommonModule, FilesRoutingModule, MatListModule, MatCardModule],
  providers: [FilesService],
})
export class FilesModule {}
