import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardBodegaComponent } from './board-bodega.component';

describe('BoardBodegaComponent', () => {
  let component: BoardBodegaComponent;
  let fixture: ComponentFixture<BoardBodegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardBodegaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
