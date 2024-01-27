import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeekerPortalComponent } from './seeker-portal/seeker-portal.component';
import { CompanyPortalComponent } from './company-portal/company-portal.component';
import { MainPortalComponent } from './main-portal/main-portal.component';
import { SignUpFirstComponent } from './seeker-portal/components/sign-up-first/sign-up-first.component';
import { SignUpSecondComponent } from './seeker-portal/components/sign-up-second/sign-up-second.component';
import { PostJobAdComponent } from './company-portal/components/post-job-ad/post-job-ad.component';
import { PostJobAdConfirmComponent } from './company-portal/components/post-job-ad-confirm/post-job-ad-confirm.component';
import { SubHeaderComponent } from './company-portal/components/post-job-ad/sub-header/sub-header.component';
import { ManageRolesComponent } from './company-portal/components/company admin/manage-roles/manage-roles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialModule } from './material.module';



@NgModule({
  declarations: [
    AppComponent,
    SeekerPortalComponent,
    CompanyPortalComponent,
    MainPortalComponent,
    SignUpFirstComponent,
    SignUpSecondComponent,
    PostJobAdComponent,
    PostJobAdConfirmComponent,
    SubHeaderComponent,
    ManageRolesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
