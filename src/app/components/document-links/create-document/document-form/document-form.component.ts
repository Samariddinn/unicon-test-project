import { Component, signal } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {
  categoryData,
  facilityTypes,
  SFormModel,
} from '../../../../datas/sender-form.data';
import { SelectComponent } from '../../../../shared/select/select.component';
import { MultiTagInputComponent } from '../../../multi-tag-input/multi-tag-input.component';
import { DatepickerComponent } from '../../../datepicker/datepicker.component';
import { SelectCardComponent } from '../../../../shared/select-card/select-card.component';
import { SelectModel } from '../../../../models/select/select.model';
import { delDocumentsData } from '../../../../datas/delivery-documents/delivery-documents.data';
import { documentTypesData } from '../../../../datas/document-types/document-types.data';
import { registrationJournalData } from '../../../../datas/registration-journal/registration-journal.data';
import { CommonModule } from '@angular/common';
import { DocumentFormFooterComponent } from '../../../document-form-footer/document-form-footer.component';

@Component({
  selector: 'app-document-form',
  imports: [
    MatIconModule,
    MatRipple,
    SelectComponent,
    MultiTagInputComponent,
    DatepickerComponent,
    CommonModule,
    DocumentFormFooterComponent,
  ],
  templateUrl: './document-form.component.html',
  styleUrl: './document-form.component.scss',
})
export class DocumentFormComponent {
  activeSelectText = signal('Рақамли технологиялар вазирлиги');
  isSenderSelected = signal(false);
  activeButton: 'shoshilinch' | 'xdfu' = 'shoshilinch';
  // Datas
  categoryData: SFormModel[] = categoryData;
  facilityTypes: SFormModel[] = facilityTypes;
  delDocumentsData: SelectModel[] = delDocumentsData;
  documentTypesData: SelectModel[] = documentTypesData;
  regJournalData: SelectModel[] = registrationJournalData;

  onSenderSelected(): void {
    this.isSenderSelected.set(!this.isSenderSelected());
  }

  onItemClicked(id: number): void {
    this.categoryData = this.categoryData.map((item) => ({
      ...item,
      isActive: id === item.id,
    }));
  }

  onSelectText(id: number): void {
    const activeItem = this.facilityTypes.find((item) => item.id === id)!;
    this.activeSelectText.set(activeItem.text);
    this.isSenderSelected.set(false);
  }

  onDeliverySelected(id: number): void {
    console.log('Selected delivery:', id);
  }

  // Set active button on sixth row
  setActiveBtn(button: 'shoshilinch' | 'xdfu') {
    this.activeButton = button;
  }
}
