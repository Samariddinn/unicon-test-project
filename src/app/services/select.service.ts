import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectService {
  openSelectId = signal<string | null>(null);

  open(id: string) {
    this.openSelectId.set(id);
  }

  close() {
    this.openSelectId.set(null);
  }

  toggle(id: string) {
    this.openSelectId.set(this.openSelectId() === id ? null : id);
  }

  constructor() {}
}
