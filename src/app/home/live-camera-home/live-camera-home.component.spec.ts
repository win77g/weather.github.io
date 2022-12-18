import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCameraHomeComponent } from './live-camera-home.component';

describe('LiveCameraHomeComponent', () => {
  let component: LiveCameraHomeComponent;
  let fixture: ComponentFixture<LiveCameraHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveCameraHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCameraHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
