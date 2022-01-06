import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CarsService } from './cars.service';
import { Car } from '../models/cars';

describe('CarsService', () => {

  let http: HttpTestingController;
  let carsSvc: CarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });

    carsSvc = TestBed.inject(CarsService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(carsSvc).toBeTruthy();
  });

  it("should get all of the cars", () => {

    const expectedCars: Car[] = [
      {
        "id": 1,
        "make": "Ford",
        "model": "Fusion Hybrid",
        "year": 2019,
        "color": "blue",
        "price": 45000
      },
      {
        "id": 2,
        "make": "Tesla",
        "model": "S",
        "year": 2018,
        "color": "red",
        "price": 100000
      }
    ];

    const spy = jasmine.createSpy();

    carsSvc.all().subscribe(spy);

    const req = http.expectOne("http://localhost:3060/cars");
    expect(req.request.method).toEqual('GET');

    req.flush(expectedCars, {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
      statusText: 'OK'
    });

    expect(spy).toHaveBeenCalledWith(expectedCars);

  });

});
