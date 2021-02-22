import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgParticlesModule } from 'ng-particles';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { HomeComponent } from './home/home.component';
import { NavigationalHierarchyComponent } from './layout/navigational-hierarchy/navigational-hierarchy.component';
import { UserCreateComponent } from './administration/users/user-create/user-create.component';
import { UserListComponent } from './administration/users/user-list/user-list.component';
import { UserEditComponent } from './administration/users/user-edit/user-edit.component';
import { UserCardComponent } from './administration/users/user-card/user-card.component';
import { UserDetailComponent } from './administration/users/user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';

import { SharedModule } from './_modules/shared.module';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { DateInputComponent } from './_forms/date-input/date-input.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    NavigationalHierarchyComponent,
    UserCreateComponent,
    UserListComponent,
    UserEditComponent,
    UserCardComponent,
    UserDetailComponent,
    LoginComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
    ServerErrorComponent,
    NotFoundComponent,
    TextInputComponent,
    DateInputComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgParticlesModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
