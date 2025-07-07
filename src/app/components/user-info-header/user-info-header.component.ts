import {
  Component,
  effect,
  ElementRef,
  HostListener,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MainRightIconsComponent } from '../main-right-icons/main-right-icons.component';

@Component({
  selector: 'app-user-info-header',
  imports: [MatIconModule, MatRipple, MainRightIconsComponent],
  templateUrl: './user-info-header.component.html',
  styleUrl: './user-info-header.component.scss',
})
export class UserInfoHeaderComponent {
  isOpen = signal(false);
  container = viewChild<ElementRef<HTMLElement>>('container');

  toggleVisiblity(): void {
    this.isOpen.set(!this.isOpen());
  }

  @HostListener('document: click', ['$event'])
  onDocumentClicked(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (this.container() && !this.container()?.nativeElement.contains(target)) {
      this.isOpen.set(false);
    }
  }
}
