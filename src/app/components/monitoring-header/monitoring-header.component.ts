import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SelectLanguageComponent } from '../select-language/select-language.component';
import { UserInfoHeaderComponent } from '../user-info-header/user-info-header.component';

@Component({
  selector: 'app-monitoring-header',
  imports: [MatIconModule, SelectLanguageComponent, UserInfoHeaderComponent],
  templateUrl: './monitoring-header.component.html',
  styleUrl: './monitoring-header.component.scss',
})
export class MonitoringHeaderComponent {
  toggleFullScreen(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}
