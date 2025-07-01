import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InternalDocumentsComponent } from './internal-documents/internal-documents.component';
import { StatisticsComponent } from './statistics/statistics.component';

@Component({
  selector: 'app-document-links',
  imports: [MatIconModule, InternalDocumentsComponent, StatisticsComponent],
  templateUrl: './document-links.component.html',
  styleUrl: './document-links.component.scss',
})
export class DocumentLinksComponent {}
