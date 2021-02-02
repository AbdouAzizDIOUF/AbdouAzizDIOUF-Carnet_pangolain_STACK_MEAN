import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import { PangolainListeComponent } from './component/pangolain-liste/pangolain-liste.component';
import { PangolainUpdateComponent } from './component/pangolain-update/pangolain-update.component';
import { PangolainCreateComponent } from './component/pangolain-create/pangolain-create.component';
import { PangolainDetailComponent } from './component/pangolain-detail/pangolain-detail.component';
import { PangolainEsapaceComponent } from './component/pangolain-affiche-detail/pangolain-esapace.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    PangolainListeComponent,
    PangolainUpdateComponent,
    PangolainCreateComponent,
    PangolainDetailComponent,
    PangolainEsapaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
