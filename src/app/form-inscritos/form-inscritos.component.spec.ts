import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInscritosComponent } from './form-inscritos.component';

describe('FormInscritosComponent', () => {
  let component: FormInscritosComponent;
  let fixture: ComponentFixture<FormInscritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInscritosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
