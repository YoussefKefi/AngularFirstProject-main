import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //interpolation
  name="Youssef";

  //property binding 
  status=false;
  //twoway databinding
search="hello"
  // event binding
  add(){
    console.log("hello arctic8");
  }
}
