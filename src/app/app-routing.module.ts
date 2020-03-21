import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {OngoingProjectsComponent} from './ongoing-projects/ongoing-projects.component';
import {OurClientsComponent} from './our-clients/our-clients.component';
import {FirmFinancesComponent} from './firm-finances/firm-finances.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'OngoingProjects', component: OngoingProjectsComponent },
  { path: 'OurClients', component: OurClientsComponent },
  { path: 'FirmFinances', component: FirmFinancesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
