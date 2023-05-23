import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DesignProjectsComponent } from './design-projects/design-projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DesignProjectsModalComponent } from './modals/design-projects-modal/design-projects-modal.component';
import { SoftwareProjectsComponent } from './components/software-projects/software-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DesignProjectsComponent,
    DesignProjectsModalComponent,
    SoftwareProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

