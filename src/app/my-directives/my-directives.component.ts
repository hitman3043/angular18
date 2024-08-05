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

  num1:string='';
  num2:string='';

  isActive:boolean=true;
  selectedState:string="";

  allname:string[]=["Abhishek","Yogesh","Manish","Taklu"];
  structuredList:any[]=[
    {id:1,name:"Yogesh",age:34,sex:"m",isActive:false},
    {id:2,name:"rohit",age:36,sex:"m",isActive:true},
    {id:3,name:"mohit",age:32,sex:"m",isActive:false},
    {id:4,name:"kuldeep",age:35,sex:"m",isActive:false},
  ]

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
