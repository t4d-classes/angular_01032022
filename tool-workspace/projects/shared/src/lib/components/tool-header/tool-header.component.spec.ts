import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolHeaderComponent } from './tool-header.component';

import { getInnerHtml } from '../../utils/test-utils';

describe('ToolHeaderComponent', () => {

  let component: ToolHeaderComponent;
  let fixture: ComponentFixture<ToolHeaderComponent>;

  const theHeaderText = "My Tool";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolHeaderComponent);
    component = fixture.componentInstance;

    component.headerText = theHeaderText;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display the specified header text', () => {

    expect(
      getInnerHtml(fixture.nativeElement, "h1")
    ).toBe(theHeaderText);
  });
});
