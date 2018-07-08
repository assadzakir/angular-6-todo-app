
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MNavComponent } from './m-nav.component';

describe('MNavComponent', () => {
  let component: MNavComponent;
  let fixture: ComponentFixture<MNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
