import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './administration/users/user-list/user-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { HomeComponent } from './home/home.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },

  //Site routes goes here 
  {
    path: '',
    component: SiteLayoutComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [      
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UserListComponent }     
    ]
  },

  // App routes goes here here
  // {
  //   path: '',
  //   component: AppLayoutComponent,
  //   runGuardsAndResolvers: 'always',
  //   canActivate: [AuthGuard],
  //   children: [
  //     { path: 'home', component: HomeComponent },
  //     { path: 'user-list', component: UserListComponent }     
  //   ]
  // },

  //no layout routes  
  //{ path: 'register', component: RegisterComponent },
  // otherwise redirect to home
     
  { path: 'not-found', component: NotFoundComponent },
  { path: 'server-error', component: ServerErrorComponent },  
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
