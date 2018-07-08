
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTableComponent } from './m-table.component';

describe('MTableComponent', () => {
  let component: MTableComponent;
  let fixture: ComponentFixture<MTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
