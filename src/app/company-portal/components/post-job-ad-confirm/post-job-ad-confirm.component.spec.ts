import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostJobAdConfirmComponent } from './post-job-ad-confirm.component';

describe('PostJobAdConfirmComponent', () => {
  let component: PostJobAdConfirmComponent;
  let fixture: ComponentFixture<PostJobAdConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostJobAdConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostJobAdConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
