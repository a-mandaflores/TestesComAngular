import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({ 
      imports: [HomeComponent],
      declarations: [],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(HomeComponent);
      component = fixture.componentInstance;
      el =  fixture.debugElement;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shod have correct contents', () => {
    let pElement = el.queryAll(By.css('p'));
    expect(pElement[0].nativeElement.textContent).toBe('home works!')
    let btnElement = el.queryAll(By.css('.btn'))
    expect(btnElement[0].nativeElement.disabled).toBeTrue()
    // let imgElement = el.queryAll(By.css('img'))
    // expect(imgElement[0].nativeElement.src).toBe('http://localhost:9876/www.google.com')
    component.title = 'Welcome to angular Testing'
    fixture.detectChanges()
    let textElement = el.queryAll(By.css('.title'));
    expect(textElement[0].nativeElement.textContent).toBe('Welcome to angular Testing')
  })
});
