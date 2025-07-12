import { Component, signal } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject } from 'rxjs';
import {
  CrDocFooter,
  crDocFooterData,
} from '../../datas/create-document-footer/cr-document-footer.data';

@Component({
  selector: 'app-document-form-footer',
  imports: [MatRipple, MatIconModule],
  templateUrl: './document-form-footer.component.html',
  styleUrl: './document-form-footer.component.scss',
})
export class DocumentFormFooterComponent {
  linksData: CrDocFooter[] = crDocFooterData;
}
