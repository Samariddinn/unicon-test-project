import { Component, signal } from '@angular/core';
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
  styleUrl: './select-language.component.scss'
})
export class SelectLanguageComponent {
  isOpen = signal(false);

  languages: LanguageOption[] = [
    {
      code: 'uz',
      label: 'O\'zbekcha',
      icon: 'uzbekistan'
    },

    {
      code: 'ru',
      label: 'Русский',
      icon: 'russia'
    },

    {
      code: 'en',
      label: 'English',
      icon: 'usa'
    }
  ]
  currentLang = this.languages[0]

  toggleDropdown(): void {
    this.isOpen.set(!this.isOpen())
  }

  selectLanguage(lang: LanguageOption) {
    this.currentLang = lang;
    this.isOpen.set(false);
  }
}
