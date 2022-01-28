import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaFormDialogComponent } from './sala-form-dialog.component';

describe('SalaFormDialogComponent', () => {
  let component: SalaFormDialogComponent;
  let fixture: ComponentFixture<SalaFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
