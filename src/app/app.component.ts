import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedService } from './service/shared.service';
import { CommonModule } from '@angular/common';
import { GradePipe } from './pipes/grade.pipe';
import { GradeDirective } from './diretivas/grade.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, GradePipe, GradeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
  marks = [97, 68, 83, 29, 75]

  constructor(private sharedService: SharedService){}

  // multiply(a: number, b: number){
  //   this.sharedService.mySharedService()
  //   return a * b
  // }
}
