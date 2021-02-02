import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangolainUpdateComponent } from './pangolain-update.component';

describe('PangolainUpdateComponent', () => {
  let component: PangolainUpdateComponent;
  let fixture: ComponentFixture<PangolainUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PangolainUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PangolainUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
