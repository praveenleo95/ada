import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatSidenavModule,
    CommonModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',

})
export class DashboardComponent {


  leftMenu = [
    {name:'Dashboard'},
    {name:'Channel'},
    {name:'Flow Bulider'},
    {name:'Multichat'},
    {name:'Contact Managment'},
    {name:'Report'},
    {name:'Campaign'},
    {name:'Admin'},
  ]

}
