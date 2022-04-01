import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoniComponent } from './moni.component';

describe('MoniComponent', () => {
  let component: MoniComponent;
  let fixture: ComponentFixture<MoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
