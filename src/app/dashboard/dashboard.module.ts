import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SidenavModule } from '../sidenav/sidenav.module';
import { ToolbarModule } from '../toolbar/toolbar.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { TablasModule } from '../pages/tablas/tablas.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    ToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    TablasModule,
   
  ],
  exports: [
    DashboardComponent
    
  ]
})
export class DashboardModule { }
