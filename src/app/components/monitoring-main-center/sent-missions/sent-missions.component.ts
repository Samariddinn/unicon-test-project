import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  sentMissionsData,
  SentMissionsModel,
} from '../../../datas/sent-missions.data';

@Component({
  selector: 'app-sent-missions',
  imports: [MatIconModule],
  templateUrl: './sent-missions.component.html',
  styleUrl: './sent-missions.component.scss',
})
export class SentMissionsComponent {
  sentMissData: SentMissionsModel[] = sentMissionsData;
}
