import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  intDocumentsData,
  intDocumentsModel,
} from '../../../datas/internal-documents.data';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-internal-documents',
  imports: [MatIconModule, MatRippleModule],
  templateUrl: './internal-documents.component.html',
  styleUrl: './internal-documents.component.scss',
})
export class InternalDocumentsComponent {
  links: intDocumentsModel[] = intDocumentsData;

  onLinkClick(id: number): void {
    this.links.forEach((link) => {
      link.isActive = link.id === id;
    });
  }
}
