import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

interface LanguageOption {
  code: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-select-language',
  imports: [MatIconModule, MatRipple],
  templateUrl: './select-language.component.html',
  styleUrl: './select-language.component.scss',
})
export class SelectLanguageComponent implements OnInit {
  isOpen = signal(false);
  container = viewChild<ElementRef<HTMLElement>>('container');

  ngOnInit(): void {
    console.log(this.container());
  }

  languages: LanguageOption[] = [
    {
      code: 'uz',
      label: "O'zbekcha",
      icon: 'uzbekistan',
    },

    {
      code: 'ru',
      label: 'Русский',
      icon: 'russian',
    },

    {
      code: 'en',
      label: 'English',
      icon: 'united-kingdom',
    },
  ];
  currentLang = this.languages[0];

  toggleDropdown(): void {
    this.isOpen.set(!this.isOpen());
  }

  selectLanguage(lang: LanguageOption) {
    this.currentLang = lang;
    this.languages = [
      lang,
      ...this.languages.filter((l) => l.code !== lang.code),
    ];
    this.isOpen.set(false);
  }

  @HostListener('document: click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (this.container() && !this.container()?.nativeElement.contains(target)) {
      this.isOpen.set(false);
    }
  }
}
