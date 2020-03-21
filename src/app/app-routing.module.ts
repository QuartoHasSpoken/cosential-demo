import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OngoingProjectsComponent} from './ongoing-projects/ongoing-projects.component';
import {OurClientsComponent} from './our-clients/our-clients.component';
import {FirmFinancesComponent} from './firm-finances/firm-finances.component';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'Dashboard/OngoingProjects', pathMatch: 'full'},
  { path: 'Dashboard', component: DashboardComponent,
    children: [
      { path: 'OngoingProjects', component: OngoingProjectsComponent },
      { path: 'OurClients', component: OurClientsComponent },
      { path: 'FirmFinances', component: FirmFinancesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
