import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangolainEsapaceComponent } from './pangolain-esapace.component';

describe('PangolainEsapaceComponent', () => {
  let component: PangolainEsapaceComponent;
  let fixture: ComponentFixture<PangolainEsapaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PangolainEsapaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PangolainEsapaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
