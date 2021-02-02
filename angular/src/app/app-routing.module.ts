import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import {PangolainListeComponent} from './component/pangolain-liste/pangolain-liste.component';
import {PangolainCreateComponent} from './component/pangolain-create/pangolain-create.component';
import {PangolainUpdateComponent} from './component/pangolain-update/pangolain-update.component';
import {PangolainDetailComponent} from './component/pangolain-detail/pangolain-detail.component';
import {PangolainEsapaceComponent} from './component/pangolain-affiche-detail/pangolain-esapace.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/liste', component:PangolainListeComponent},
  { path: 'profile/create', component:PangolainCreateComponent},
  { path: 'profile/update/:id', component:PangolainUpdateComponent},
  { path: 'profile/detail/:id', component:PangolainDetailComponent},
  { path: 'profile/affiche_detail/:id', component:PangolainEsapaceComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
