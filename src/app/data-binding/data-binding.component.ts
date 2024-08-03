import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
   courseName:string = "Angular 18";
   nextCourse:string = "React Js";
   inputType = "checkbox";
   isState:string = "mumbai";
   rollNo:number = 222;
   isIndia:boolean = true;
   currentDate:Date = new Date();
   successClass = "btn btn-success";
   warningClass = "btn btn-warning";
   texthere:string = "My text area";
   isShow:boolean=true;
   isHide:boolean=false;


   constructor(){


   }

   showMessage(message: string){
    this.courseName=this.nextCourse
   }

   showMe(){
this.isIndia=true;

   }


   hideMe(){
    this.isIndia=false;
   }




}
