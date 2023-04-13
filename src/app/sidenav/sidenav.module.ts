import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { TablasComponent } from '../pages/tablas/tablas.component';
import { TablasModule } from '../pages/tablas/tablas.module';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    TablasModule
  ],
  exports:[
    SidenavComponent
  ]
})
export class SidenavModule { }
