import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangolainDetailComponent } from './pangolain-detail.component';

describe('PangolainDetailComponent', () => {
  let component: PangolainDetailComponent;
  let fixture: ComponentFixture<PangolainDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PangolainDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PangolainDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
