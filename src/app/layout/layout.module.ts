import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent, HomeComponent, FooterComponent, AboutComponent } from '@app/layout';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule,
  ],
  declarations: [
    LayoutComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    HeaderComponent,
    DashboardComponent
  ]
})
export class LayoutModule { }
