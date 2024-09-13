import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SombreroComponent } from './sombrero.component';

describe('SombreroComponent', () => {
  let component: SombreroComponent;
  let fixture: ComponentFixture<SombreroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SombreroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SombreroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
