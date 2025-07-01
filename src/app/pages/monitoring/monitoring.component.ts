import { Component } from '@angular/core';
import { MonitoringHeaderComponent } from '../../components/monitoring-header/monitoring-header.component';
import { DocumentLinksComponent } from '../../components/document-links/document-links.component';
import { MonitoringMainCenterComponent } from '../../components/monitoring-main-center/monitoring-main-center.component';
import { MainRightIconsComponent } from '../../components/main-right-icons/main-right-icons.component';

@Component({
  selector: 'app-monitoring',
  imports: [
    MonitoringHeaderComponent,
    DocumentLinksComponent,
    MonitoringMainCenterComponent,
    MainRightIconsComponent,
  ],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.scss',
})
export default class MonitoringComponent {}
