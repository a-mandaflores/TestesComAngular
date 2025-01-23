import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('shoud render a button with text subscribe', () => {
  //   const btnElement = el.queryAll(By.css('.subscribe'))
  //   component.isSubscribed = false;
  //   component.btnText = 'Subscribe'
  //   fixture.detectChanges();
  //   expect(btnElement[0].nativeElement.textContent).toBe("Subscribe")
  //   expect(btnElement[0].nativeElement.disabled).toBeFalse()
  // })

  // it('shoud render a button with text subscribe and the button be disable after click', () => {
  //   const btnElement = el.queryAll(By.css('.subscribe'))
  //   component.isSubscribed = false;
  //   component.btnText = 'Subscribe';
  //   btnElement[0].nativeElement.click()
  //   fixture.detectChanges();
  //   expect(btnElement[0].nativeElement.textContent).toBe("Subscribed")
  //   expect(btnElement[0].nativeElement.disabled).toBeTrue()
  // })

  // it('shoud render a button with text subscribe', () => {
  //   component.isSubscribed = false;
  //   fixture.detectChanges();
  //   const btnElement = el.queryAll(By.css('.subscribe'))
  //   expect(btnElement[0].nativeElement.textContent).toBe("Subscribe")
  //   expect(btnElement[0].nativeElement.disabled).toBeFalse()
  // })

  // it('shoud render a button with text subscribe and the button be disable after click', (done: DoneFn) => {
  //   component.isSubscribed = false;
  //   fixture.detectChanges();

  //   let btnElement = el.queryAll(By.css('.subscribe'))
  //   btnElement[0].nativeElement.click()

  //   setTimeout(() => {
  //     fixture.detectChanges();
  
  //     btnElement = el.queryAll(By.css('.subscribe'))
  
  //     expect(btnElement[0].nativeElement.textContent).toBe("Subscribed")
  //     expect(btnElement[0].nativeElement.disabled).toBeTrue()
  //     done()
  //   }, 3000)

    it('shoud render a button with text subscribe and the button be disable after click', fakeAsync(() => {
      component.isSubscribed = false;
      fixture.detectChanges();
  
      let btnElement = el.queryAll(By.css('.subscribe'))
      btnElement[0].nativeElement.click()
  
      setTimeout(() => {
        fixture.detectChanges();
    
        btnElement = el.queryAll(By.css('.subscribe'))
      }, 3000)
      
      flush()
      // tick(3000)
      expect(btnElement[0].nativeElement.textContent).toBe("Subscribed")
      expect(btnElement[0].nativeElement.disabled).toBeTrue()
  }))
});
