import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import bootstrap from '../main.server';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MyDirectivesComponent } from './my-directives/my-directives.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
