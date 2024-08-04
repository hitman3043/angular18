import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-directives',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './my-directives.component.html',
  styleUrl: './my-directives.component.css'
})
export class MyDirectivesComponent {
  makerec:string="make square"
  isShow:boolean=true;
  isToggle:boolean=true;
  isShowDiv:boolean=true;


  constructor(){

  }

  hideMe(){
    this.isShow=false;
  }

  showMe(){
    this.isShow=true;

  }

  toggleMe()
  {
    this.isToggle = !this.isToggle
  }

}