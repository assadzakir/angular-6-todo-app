
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MDashComponent } from './m-dash.component';

describe('MDashComponent', () => {
  let component: MDashComponent;
  let fixture: ComponentFixture<MDashComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
