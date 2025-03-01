import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../service/residence.service';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
id!:number
listresidence:Residence= new Residence
constructor(private act:ActivatedRoute,private resServ:ResidenceService) {}
ngOnInit(): void {
  this.id=this.act.snapshot.params['id']
  this.resServ.getResidence(this.id).subscribe((data)=>{
    this.listresidence=data})
}
}
