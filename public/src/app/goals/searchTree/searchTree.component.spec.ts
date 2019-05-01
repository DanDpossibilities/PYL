import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTreeComponent } from './searchTree.component';

describe('SearchTreeComponent', () => {
  let component: SearchTreeComponent;
  let fixture: ComponentFixture<SearchTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
