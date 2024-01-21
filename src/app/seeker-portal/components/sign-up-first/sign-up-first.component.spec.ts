import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFirstComponent } from './sign-up-first.component';

describe('SignUpFirstComponent', () => {
  let component: SignUpFirstComponent;
  let fixture: ComponentFixture<SignUpFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpFirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignUpFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
