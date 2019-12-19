import { OrderService } from './order.service';
import { TestBed } from '@angular/core/testing';

describe('OrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderService = TestBed.get(OrderService);
    expect(service).toBeTruthy();
  });
});
