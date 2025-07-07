import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InternalDocumentsComponent } from './internal-documents/internal-documents.component';
import { MatRipple } from '@angular/material/core';
import { CreateDocumentComponent } from './create-document/create-document.component';

@Component({
  selector: 'app-document-links',
  imports: [
    MatIconModule,
    InternalDocumentsComponent,
    MatRipple,
    CreateDocumentComponent,
  ],
  templateUrl: './document-links.component.html',
  styleUrl: './document-links.component.scss',
})
export class DocumentLinksComponent {
  isDocumentOpen = signal(true);

  onDocumentCreate(): void {
    this.isDocumentOpen.set(false);
  }

  onBtnCloseClicked(): void {
    this.isDocumentOpen.set(true);
  }
}
