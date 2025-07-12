import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  recMissionData,
  RecMissionsModel,
} from '../../../datas/received-missions.data';
import { BarChartComponent } from '../../charts/bar-chart/bar-chart.component';
import { LineChartComponent } from '../../charts/line-chart/line-chart.component';
import { CommonModule } from '@angular/common';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-received-missions',
  imports: [
    MatIconModule,
    BarChartComponent,
    LineChartComponent,
    CommonModule,
    MatRipple,
  ],
  templateUrl: './received-missions.component.html',
  styleUrl: './received-missions.component.scss',
})
export class ReceivedMissionsComponent {
  recMissionData: RecMissionsModel[] = recMissionData;
  isLastWeek = signal(true);

  onLastWeek(): void {
    this.isLastWeek.set(true);
  }

  onThisWeek(): void {
    this.isLastWeek.set(false);
  }
}
