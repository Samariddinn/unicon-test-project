import { Component, input, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-line-chart',
  imports: [ChartModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
})
export class LineChartComponent implements OnInit {
  data: any;
  options: any;
  secondData: any;
  secondOptions: any;
  isSecondItem = input(false);

  ngOnInit() {
    // First chart
    // Chart data
    this.data = {
      labels: ['Du', 'Se', 'Cho', 'Pa', 'Ju', 'Sha', 'Ya'],
      datasets: [
        {
          label: 'Data',
          data: [10, 12, 11, 15, 34, 30, 28],
          fill: true,
          borderColor: '#42A5F5',
          backgroundColor: 'rgba(66, 165, 245, 0.2)',
          pointBackgroundColor: '#42A5F5',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#42A5F5',
          pointRadius: 5,
          tension: 0.4,
        },
      ],
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 1.2,

      onHover: (event: any, chartElement: any[]) => {
        event.native.target.style.cursor = chartElement.length
          ? 'pointer'
          : 'default';
      },
      plugins: {
        datalabels: {
          display: false,
        },
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          backgroundColor: '#6b727d',
          padding: 15,
          cornerRadius: 5,
          displayColors: false,
          callbacks: {
            title: () => '',
            label: (context: any) => context.parsed.y.toString(),
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          beginAtZero: true,
          max: 40,
          ticks: {
            stepSize: 10, // Set step size for y-axis (0, 10, 20, 30, 40)
          },
        },
      },
    };

    // End of First Chart

    this.secondData = {
      labels: ['Du', 'Se', 'Cho', 'Pa', 'Ju', 'Sha', 'Ya'],
      datasets: [
        {
          label: 'Data',
          data: [30, 12, 20, 15, 15, 30, 28],
          fill: true,
          borderColor: '#42A5F5',
          backgroundColor: 'rgba(66, 165, 245, 0.2)',
          pointBackgroundColor: '#42A5F5',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#42A5F5',
          pointRadius: 5,
          tension: 0.4,
        },
      ],
    };

    this.secondOptions = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 1.2,

      onHover: (event: any, chartElement: any[]) => {
        event.native.target.style.cursor = chartElement.length
          ? 'pointer'
          : 'default';
      },
      plugins: {
        datalabels: {
          display: false,
        },
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          backgroundColor: '#6b727d',
          padding: 15,
          cornerRadius: 5,
          displayColors: false,
          callbacks: {
            title: () => '',
            label: (context: any) => context.parsed.y.toString(),
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          beginAtZero: true,
          max: 40,
          ticks: {
            stepSize: 10, // Set step size for y-axis (0, 10, 20, 30, 40)
          },
        },
      },
    };
  }
}
