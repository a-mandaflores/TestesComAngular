import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SharedService } from './service/shared.service';

describe('AppComponent', () => {
  let shared: SharedService
  let component : AppComponent

  shared = jasmine.createSpyObj("SharedService", ["mySharedService"])

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppComponent, {
        provide: SharedService, useValue: shared
      }]
    })
    component = TestBed.inject(AppComponent);
  })

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  
  // it("shoud call the mySharedService func", () => {
  //   component.multiply(2,3)
  //   expect(shared.mySharedService).toHaveBeenCalled();
  // })
});
