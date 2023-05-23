import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignProjectsModalComponent } from './design-projects-modal.component';

describe('DesignProjectsModalComponent', () => {
  let component: DesignProjectsModalComponent;
  let fixture: ComponentFixture<DesignProjectsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignProjectsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignProjectsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
