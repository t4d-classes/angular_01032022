import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Car } from '../../models/cars';

import { CarViewRowComponent } from './car-view-row.component';

describe('CarViewRowComponent', () => {
  let component: CarViewRowComponent;
  let fixture: ComponentFixture<CarViewRowComponent>;

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
      declarations: [ CarViewRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarViewRowComponent);
    component = fixture.componentInstance;

    component.car = car;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit car id when edit button is clicked', () => {

    const spy = jasmine.createSpy();

    component.editCar.subscribe(spy);

    const button = fixture.debugElement
      .query(By.css("button:first-child"))
      .nativeElement as HTMLButtonElement;

    button.dispatchEvent(new Event("click"));
    expect(spy).toHaveBeenCalledWith(car.id)

  });

  it('should emit car id when delete button is clicked', () => {

    const spy = jasmine.createSpy();

    component.deleteCar.subscribe(spy);

    const button = fixture.debugElement
      .query(By.css("button:last-child"))
      .nativeElement as HTMLButtonElement;

    button.dispatchEvent(new Event("click"));
    expect(spy).toHaveBeenCalledWith(car.id)

  });


});
