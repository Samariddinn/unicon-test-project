import { Component, input, output } from '@angular/core';
import { SelectModel } from '../../models/select/select.model';
import { delDocumentsData } from '../../datas/delivery-documents/delivery-documents.data';
import { MatIconModule } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-select-card',
  imports: [MatIconModule, MatRipple],
  templateUrl: './select-card.component.html',
  styleUrl: './select-card.component.scss',
})
export class SelectCardComponent {
  selectedList = output<number>();
  selectData = input<SelectModel[]>([]);

  onListClicked(id: number): void {
    this.selectedList.emit(id);
  }
}
