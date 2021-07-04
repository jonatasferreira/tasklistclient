import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitebodyComponent } from './sitebody.component';

describe('SitebodyComponent', () => {
  let component: SitebodyComponent;
  let fixture: ComponentFixture<SitebodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitebodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
