import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceRoutingModule } from '../annonce-routing/annonce-routing.module';
import { AnnonceComponent } from './annonce.component';
import { ListComponent } from '../list/list.component';




@NgModule({
  declarations: [  
    AnnonceComponent,
    ListComponent,
   ],
  imports: [
    CommonModule,
    AnnonceRoutingModule,
  ]
})
export class AnnonceModule { }
