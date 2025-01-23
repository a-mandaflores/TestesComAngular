import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GradeDirective } from './grade.directive';
import { AppComponent } from '../app.component';
import { DebugElement } from '@angular/core';
import { GradePipe } from '../pipes/grade.pipe';
import { By } from '@angular/platform-browser';

describe('GradeDirective', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>
  let el: DebugElement

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GradeDirective, AppComponent, GradePipe], 
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance
    el = fixture.debugElement
    fixture.detectChanges(); 

  }));



  it('should create an instance', () => {
    let mockElRef = {
      nativeElement: document.createElement('div')
    }
    const directive = new GradeDirective(mockElRef);
    expect(directive).toBeTruthy();
  });

  it('should change the text color on mouser over', () => {
    let divs = el.queryAll(By.css('div'))
    divs[0].triggerEventHandler('mouseenter', {})
    fixture.detectChanges(); 
    
    expect(divs[0].nativeElement.style.color).toBe('green');

    divs[0].triggerEventHandler('mouseleave', {})
    fixture.detectChanges(); 
    expect(divs[0].nativeElement.style.color).toBe('black');

  });
});
