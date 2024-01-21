import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostJobAdComponent } from './post-job-ad.component';

describe('PostJobAdComponent', () => {
  let component: PostJobAdComponent;
  let fixture: ComponentFixture<PostJobAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostJobAdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostJobAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
