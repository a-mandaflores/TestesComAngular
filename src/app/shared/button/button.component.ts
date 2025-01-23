import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  btnText = 'Subscribe';
  isSubscribed = false

  subscribe(){
    this.isSubscribed = true
    this.btnText = 'Subscribed'
  }

  subscribeTestTree(){
    this.isSubscribed = true
    this.btnText = 'Subscribed'
  }
}
