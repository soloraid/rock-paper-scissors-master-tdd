import {ComponentFixture, TestBed} from '@angular/core/testing';

import { IconsComponent } from './icons.component';

describe('IconsComponent', () => {
  let component: IconsComponent;
  let fixture: ComponentFixture<IconsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {});

  it('should show icon', () => {
    const icon = fixture.nativeElement.querySelector('[data-test="icon"]');
    expect(icon).toBeTruthy();
  });
});
