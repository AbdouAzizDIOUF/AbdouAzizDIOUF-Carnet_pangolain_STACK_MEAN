import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangolainCreateComponent } from './pangolain-create.component';

describe('PangolainCreateComponent', () => {
  let component: PangolainCreateComponent;
  let fixture: ComponentFixture<PangolainCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PangolainCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PangolainCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
