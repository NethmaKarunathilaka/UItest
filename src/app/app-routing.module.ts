import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ManageRolesComponent}from './company-portal/components/company admin/manage-roles/manage-roles.component'

const routes: Routes = [
  {path:'manageRoles',component:ManageRolesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
