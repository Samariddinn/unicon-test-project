import { Component, signal } from '@angular/core';
import { DocumentsInfoComponent } from './documents-info/documents-info.component';
import { ReceivedMissionsComponent } from './received-missions/received-missions.component';
import { SentMissionsComponent } from './sent-missions/sent-missions.component';
import { RuleNewsComponent } from './rule-news/rule-news.component';
import { CalendarComponent } from './calendar/calendar.component';
import { WeatherComponent } from './weather/weather.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { MeetingComponent } from './meeting/meeting.component';
import { LexUzComponent } from './lex-uz/lex-uz.component';
import { NotesComponent } from './notes/notes.component';
import { CommonModule } from '@angular/common';
import { MatRipple } from '@angular/material/core';
import { CreateDocumentComponent } from '../document-links/create-document/create-document.component';

@Component({
  selector: 'app-monitoring-main-center',
  imports: [
    DocumentsInfoComponent,
    ReceivedMissionsComponent,
    SentMissionsComponent,
    RuleNewsComponent,
    CalendarComponent,
    WeatherComponent,
    BirthdaysComponent,
    MeetingComponent,
    LexUzComponent,
    NotesComponent,
    CommonModule,
    MatRipple,
    CreateDocumentComponent,
  ],
  templateUrl: './monitoring-main-center.component.html',
  styleUrl: './monitoring-main-center.component.scss',
})
export class MonitoringMainCenterComponent {
  activeLink: 'Yangiliklar' | 'Statistika' | 'Sorovnoma' = 'Statistika';

  setActive(link: 'Yangiliklar' | 'Statistika' | 'Sorovnoma'): void {
    this.activeLink = link;
  }
}
