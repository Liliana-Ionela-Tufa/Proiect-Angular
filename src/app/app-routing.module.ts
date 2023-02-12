import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from 'src/guards/auth-guard.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path: '', 
   redirectTo: 'login', 
   pathMatch: 'full'
  },

  {path:'login',
   component: LoginComponent
  },

  {path:'dashboard',
   component: DashboardComponent,
   canActivate : [AuthGuardGuard]
  },

  {path:'register',
   component: RegisterComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
