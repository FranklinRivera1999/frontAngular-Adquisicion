import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventodetComponent } from './eventodet.component';

describe('EventodetComponent', () => {
  let component: EventodetComponent;
  let fixture: ComponentFixture<EventodetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventodetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventodetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
