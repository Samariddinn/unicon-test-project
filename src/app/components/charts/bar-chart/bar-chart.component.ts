import { Component, input, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { Chart, ChartData, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);
@Component({
  selector: 'app-bar-chart',
  imports: [ChartModule, MatIconModule, ButtonModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent {
  chartData!: ChartData;
  chartOptions!: ChartOptions;
  isLastWeek = signal(true);

  ngOnInit(): void {
    const data = [8, 12, 10, 3, 10, 7, 9];
    const maxDataValue = Math.max(...data);

    const padding = 1;

    const stepSize = Math.max(Math.floor(maxDataValue / 3), 3);

    this.chartData = {
      labels: [
        "Muddati\no'tgan",
        '1 kun',
        '2 kun',
        '3 kun',
        '1 kun\n(Murojaat)',
        '2 kun\n(Murojaat)',
        '3 kun\n(Murojaat)',
      ],

      datasets: [
        {
          label: '',
          data: data,
          backgroundColor: '#a8b0d6',
          borderRadius: 13,
          barThickness: 42,
          categoryPercentage: 0.5,
          barPercentage: 0.6,
        },
      ],
    };

    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 1.2,
      indexAxis: 'x',
      layout: {
        padding: {
          top: 25,
        },
      },
      onHover: (event: any, chartElement: any[]) => {
        event.native.target.style.cursor = chartElement.length
          ? 'pointer'
          : 'default';
      },
      plugins: {
        tooltip: {
          enabled: true,
          callbacks: {
            title: () => '',
            label: function (context) {
              return String(context.raw);
            },
          },
        },
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
        datalabels: {
          display: true,
          align: 'end',
          anchor: 'end',
          font: {
            size: 14,
          },
          color: '#000',
          formatter: (value: any, context: any) => {
            return value;
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            display: true,
            color: '#495057',
            maxRotation: 0,
            minRotation: 0,
            autoSkip: false,
            callback: function (value, index, ticks) {
              const label = this.getLabelForValue(value as number);
              return label.split('\n');
            },
          },
          title: {
            display: false,
          },
        },
        y: {
          beginAtZero: true,
          max: 12,
          ticks: {
            stepSize: 3,
            color: '#495057',
          },
          grid: {
            color: '#dee2e6',
            tickBorderDash: [5, 5],
          },
        },
      },

      hover: {
        mode: 'nearest',
        intersect: true,
      },
    };
  }
}
