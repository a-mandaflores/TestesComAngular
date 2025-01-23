import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }

  mySharedService(){
    console.log('Call me')
  }
}
