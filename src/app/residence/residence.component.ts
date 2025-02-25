import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/core/models/residence';
import { ResidenceService } from '../service/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit{

listfav: Residence[]=[]
listServiceResidence: Residence[]=[]

num!:any
constructor(private resService:ResidenceService) { 

}
  ngOnInit(): void {
   this.resService.getAllResidence().subscribe((data)=>{
    this.listServiceResidence=data
    console.log(this.listServiceResidence)
   })
  }

  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpg", status: "Disponible"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpg", status:
    "Disponible" },
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg", status:
    "Vendu"},
    {id:4,"name": "El Anber","address":"inconnu",
    "image":"../../assets/images/R4.jpg", status: "En Construction"}
    ];
    search=""
    show(res:Residence){
      if(res.address=="inconnu"){
        alert("address:inconnu")
    }else{
      alert("adresse: "+res.address)
    }
  }
  listfavoris(res:Residence){
const index=this.listfav.findIndex(r=>r.id==res.id)
if(index>-1){
this.listfav.splice(index,1)
}else{
  this.listfav.push(res)
  console.log("list fav:"+JSON.stringify(this.listfav))
}
  }
  isfavoris(res:Residence) {
    return this.listfav.some(r=>r.id==res.id)
  }

  shownumber(){
    this.num=this.resService.getNumberOfValue(this.listResidences,"name","El Arij")
  }

  deleteResidence(id:any){
this.resService.deleteResidence(id).subscribe(()=>{
console.log("residence deleted")
//window.location.reload() //trefrechi page but its the lazy method
this.ngOnInit() //trefrechi page zeda
})

}
}
