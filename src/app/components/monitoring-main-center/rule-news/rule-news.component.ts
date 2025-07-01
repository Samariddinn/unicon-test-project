import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ruleNewsdData, ruleNewsModel } from '../../../datas/rule-news.data';

@Component({
  selector: 'app-rule-news',
  imports: [MatIconModule],
  templateUrl: './rule-news.component.html',
  styleUrl: './rule-news.component.scss',
})
export class RuleNewsComponent {
  ruleNewsData: ruleNewsModel[] = ruleNewsdData;
}
