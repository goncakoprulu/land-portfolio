import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignProjectsComponent } from './design-projects.component';

describe('DesignProjectsComponent', () => {
  let component: DesignProjectsComponent;
  let fixture: ComponentFixture<DesignProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
