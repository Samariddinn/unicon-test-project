import { Component, output } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { DocumentFormComponent } from './document-form/document-form.component';

@Component({
  selector: 'app-create-document',
  imports: [MatIconModule, MatRipple, DocumentFormComponent],
  templateUrl: './create-document.component.html',
  styleUrl: './create-document.component.scss',
})
export class CreateDocumentComponent {
  closed = output();
  onDocumentClose() {
    this.closed.emit();
  }
}
