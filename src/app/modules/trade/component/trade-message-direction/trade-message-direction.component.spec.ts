import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeMessageDirectionComponent } from './trade-message-direction.component';

describe('TradeMessageDirectionComponent', () => {
  let component: TradeMessageDirectionComponent;
  let fixture: ComponentFixture<TradeMessageDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeMessageDirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeMessageDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
