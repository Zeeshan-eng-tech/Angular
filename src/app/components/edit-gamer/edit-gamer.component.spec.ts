import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGamerComponent } from './edit-gamer.component';

describe('EditGamerComponent', () => {
  let component: EditGamerComponent;
  let fixture: ComponentFixture<EditGamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditGamerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
