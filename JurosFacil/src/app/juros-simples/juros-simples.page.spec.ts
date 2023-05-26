import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JurosSimplesPage } from './juros-simples.page';

describe('JurosSimplesPage', () => {
  let component: JurosSimplesPage;
  let fixture: ComponentFixture<JurosSimplesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JurosSimplesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
