import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePonyComponent } from './update-pony.component';

describe('UpdatePonyComponent', () => {
  let component: UpdatePonyComponent;
  let fixture: ComponentFixture<UpdatePonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
