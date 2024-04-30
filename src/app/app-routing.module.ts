import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignProjectsComponent } from './design-projects/design-projects.component';
import { SoftwareProjectsComponent } from './components/software-projects/software-projects.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'design-projects', component: DesignProjectsComponent },
  { path: 'software-projects', component: SoftwareProjectsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
