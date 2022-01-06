import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { Car } from '../../models/cars';
import { CarEditRowComponent } from './car-edit-row.component';

describe('CarEditRowComponent', () => {
  let component: CarEditRowComponent;
  let fixture: ComponentFixture<CarEditRowComponent>;

  const car: Car = {
    id: 1,
    make: 'Ford',
    model: 'Fusion',
    year: 2019,
    color: 'red',
    price: 45000,
  };  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarEditRowComponent ],
      imports: [ ReactiveFormsModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarEditRowComponent);
    component = fixture.componentInstance;
    component.car = car;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should output the modified car when save is clicked', () => {

    // move to a utility function
    const input = fixture.debugElement
      .query(By.css("td:nth-child(2) > input"))
      .nativeElement as HTMLInputElement;

    input.value = "Chevrolet";
    input.dispatchEvent(new Event("input"));

    const spy = jasmine.createSpy();
    component.saveCar.subscribe(spy);

    // move this to a utility function as well
    const saveCarButton = fixture.debugElement
      .query(By.css("button:first-child"))
      .nativeElement as HTMLButtonElement;

    saveCarButton.dispatchEvent(new Event("click"));

    expect(spy).toHaveBeenCalledWith({
      ...car,
      make: 'Chevrolet',
    });

  });
});
