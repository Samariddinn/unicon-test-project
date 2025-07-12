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
    const clickedLink = this.links.find((link) => link.id === id);
    if (!clickedLink) return;

    if (clickedLink.isDropDown) {
      clickedLink.isExpanded = !clickedLink.isExpanded;
    } else {
      this.closeAllDropdowns();
    }

    this.clearActiveStates();
    clickedLink.isActive = true;
  }

  // Close all dropdowns
  private closeAllDropdowns(): void {
    this.links.forEach((link) => {
      if (link.isDropDown) {
        link.isExpanded = false;
      }
    });
  }

  private clearActiveStates(): void {
    this.links.forEach((link) => {
      link.isActive = false;
    });
  }
}
