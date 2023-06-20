import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';
import { RegisterNewComponent } from './register-new/register-new.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      }

    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },
  {path:'register-new', component:RegisterNewComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
