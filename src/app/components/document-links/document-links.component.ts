import { Component, OnInit, output, signal } from '@angular/core';
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
  isDocumentOpen = signal(false);
  toggleState = output<boolean>();

  onDocumentCreate(): void {
    this.isDocumentOpen.set(true);
    document.body.classList.add('no-scroll');
  }

  onBtnCloseClicked(): void {
    this.isDocumentOpen.set(false);
    document.body.classList.remove('no-scroll');
  }
}
