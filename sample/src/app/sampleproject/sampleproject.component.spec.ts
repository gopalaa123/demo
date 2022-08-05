import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleprojectComponent } from './sampleproject.component';

describe('SampleprojectComponent', () => {
  let component: SampleprojectComponent;
  let fixture: ComponentFixture<SampleprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
