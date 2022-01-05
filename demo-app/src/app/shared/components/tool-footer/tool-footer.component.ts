import { Component, OnInit, Input } from '@angular/core';

import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-tool-footer',
  templateUrl: './tool-footer.component.html',
  styleUrls: ['./tool-footer.component.css']
})
export class ToolFooterComponent implements OnInit {

  @Input()
  companyName = "Sample Company";

  currentYear = this.calendarSvc.currentYear();

  constructor(private calendarSvc: CalendarService) { }

  ngOnInit(): void {
  }

}
