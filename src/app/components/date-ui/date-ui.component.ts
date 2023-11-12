import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-ui',
  templateUrl: './date-ui.component.html',
  styleUrls: ['./date-ui.component.scss']
})
export class DateUiComponent {
  @Input() showButtonBar = false;
  @Input() dateMode:"multiple" | "range" | "single" = "single";
  @Input() placeholder = "";
}
