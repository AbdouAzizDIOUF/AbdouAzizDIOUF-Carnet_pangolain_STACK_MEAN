import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PangolainListeComponent } from './pangolain-liste.component';

describe('PangolainListeComponent', () => {
  let component: PangolainListeComponent;
  let fixture: ComponentFixture<PangolainListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PangolainListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PangolainListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
