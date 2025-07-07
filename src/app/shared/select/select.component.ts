import {
  Component,
  computed,
  inject,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { SelectModel } from '../../models/select/select.model';
import { SelectService } from '../../services/select.service';

@Component({
  selector: 'app-select',
  imports: [MatIconModule, MatRipple],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent implements OnInit {
  label = input('');
  selectData = input<SelectModel[]>([]);
  isTextBlack = input(false);
  selectId = input('');
  data = signal<SelectModel[]>([]);
  activeSelectText = input<string>('');
  selectedText = signal('');
  selected = output<number>();

  private selectService = inject(SelectService);
  isOpen = computed(
    () => this.selectService.openSelectId() === this.selectId()
  );

  ngOnInit(): void {
    this.data.set(this.selectData());
    this.selectedText.set(this.activeSelectText());
  }

  toggleDropDown() {
    this.selectService.toggle(this.selectId());
  }

  onListClicked(id: number) {
    const newData = this.selectData().map((item) => ({
      ...item,
      isActive: item.id === id,
    }));
    const selectedItem = newData.find((i) => i.id === id);
    if (selectedItem) {
      this.selectedText.set(selectedItem.text);
      this.selected.emit(id);
    }

    this.data.set(newData);
    this.selectService.close();
  }
}
