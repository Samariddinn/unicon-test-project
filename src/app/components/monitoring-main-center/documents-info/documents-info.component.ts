import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DocInfoModel, docsInfoData } from '../../../datas/documents-info.data';

@Component({
  selector: 'app-documents-info',
  imports: [MatIconModule],
  templateUrl: './documents-info.component.html',
  styleUrl: './documents-info.component.scss',
})
export class DocumentsInfoComponent {
  docsData: DocInfoModel[] = docsInfoData;
}
