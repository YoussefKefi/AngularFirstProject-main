import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../service/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent implements OnInit{
  formR!:FormGroup
  constructor(private resService:ResidenceService, private router:Router) { }
  ngOnInit(): void {
  this.formR=new FormGroup({
    id:new FormControl('',[Validators.required,Validators.minLength(1)]),
    name:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z]/)]),
    address:new FormControl('',[Validators.required,Validators.maxLength(20)]),
    image:new FormControl('../../assets/images/R3.jpg',Validators.required),
    status:new FormControl('',[Validators.required,Validators.pattern(/^disponible$/)]),

  })
  }
  get status(){
    return this.formR.get('status')
  }
  add()
{
  //console.log(JSON.stringify(this.formR.value))
  this.resService.addResidence(this.formR.value).subscribe(
    ()=>{console.log('data added')},)
}

  
}





