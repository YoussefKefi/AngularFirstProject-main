import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from 'src/core/models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
UrlResidence="http://localhost:3000/residence"
  constructor(private http:HttpClient) { }

 
  getNumberOfValue(list:any,criteria:string,value:any){
    let n=0
    for(let i in list){
      if(list[i][criteria] == value){
        n++
      }
    }
    return n 
  }

getAllResidence():Observable<Residence[]>{
  return this.http.get<Residence[]>(this.UrlResidence)
}

getResidence(id:any):Observable<Residence[]>{
  return this.http.get<Residence[]>(this.UrlResidence+'/'+id)
}

deleteResidence(id:any):Observable<Residence[]>{
  return this.http.delete<Residence[]>(this.UrlResidence+'/'+id)
}

addResidence(res:Residence):Observable<Residence[]>{
  return this.http.post<Residence[]>(this.UrlResidence,res)
}

updateResidence(res:Residence,id:any):Observable<Residence[]>{
  return this.http.put<Residence[]>(this.UrlResidence+'/'+id,res)
}



}
