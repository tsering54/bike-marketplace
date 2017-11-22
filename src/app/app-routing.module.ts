import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './home/login/login.component'
import { RegisterComponent } from './home/register/register.component'
import { BrowseComponent } from './browse/browse.component';


// thank you https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3
// for route guard solution
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'register',
          component: RegisterComponent
        }
      ]
  },

  {
    path: 'browse',
    pathMatch: 'full',
    component: BrowseComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  },

  {
    path: '**', // probably overkill thanks to server catchall
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
