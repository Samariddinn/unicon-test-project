import {
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-multi-tag-input',
  imports: [MatIconModule, MatRipple, MatSnackBarModule],
  templateUrl: './multi-tag-input.component.html',
  styleUrl: './multi-tag-input.component.scss',
})
export class MultiTagInputComponent {
  snackbar = inject(MatSnackBar);
  dropdownContainer = viewChild<ElementRef>('dropdownContainer');
  allTags = [
    'Kadr masalalari',
    'Murojaatlar',
    'Texnik masalalar',
    'Shikoyatlar',
  ];
  selectedTags = signal<string[]>(['Kadr masalalari']);
  showDropDown = signal(false);

  toggleDropDown(): void {
    this.showDropDown.set(!this.showDropDown());
  }

  // Get not selected tags
  get availabeTags(): string[] {
    return this.allTags.filter((tag) => !this.selectedTags().includes(tag));
  }

  // Add tag to selection
  addTag(tag: string): void {
    if (this.selectedTags().length >= 2) {
      this.snackbar.open(
        'Сиз 2 тадан ортиқ масала танлай олмайсиз.',
        'Yopish',
        {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        }
      );
      return;
    }
    this.selectedTags.update((tags) => [...tags, tag]);
    this.showDropDown.set(false);
  }

  // Remove tag
  removeTag(tag: string): void {
    if (this.selectedTags().length <= 1) {
      this.snackbar.open('Камида 1 та масала қолиши керак.', 'Yopish', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      return;
    }
    this.selectedTags.update((tags) => tags.filter((t) => t !== tag));
  }

  // Host listener, to close the dropdown
  @HostListener('document: click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      this.dropdownContainer() &&
      !this.dropdownContainer()?.nativeElement.contains(target)
    ) {
      this.showDropDown.set(false);
    }
  }
}
