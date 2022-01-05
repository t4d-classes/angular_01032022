import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarService } from '../../services/calendar.service';
import { getInnerHtml } from '../../utils/test-utils';

import { ToolFooterComponent } from './tool-footer.component';

const mockCalendarService = {
  currentYear() {
    return 1900;
  }
};

describe('ToolFooterComponent', () => {
  let component: ToolFooterComponent;
  let fixture: ComponentFixture<ToolFooterComponent>;
  let companyYear = 1900;
  let companyName = "A Cool Company, Inc.";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolFooterComponent ],
      providers: [
        { provide: CalendarService, useValue: mockCalendarService }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolFooterComponent);
    component = fixture.componentInstance;

    component.companyName = "A Cool Company, Inc.";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display footer', () => {

    expect(getInnerHtml(fixture.nativeElement, "small"))
      .toBe(" © " + companyYear + ", " + companyName + " ");

  });
});
