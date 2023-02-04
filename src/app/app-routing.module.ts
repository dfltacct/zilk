import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/shared/guards/AuthGuard';
import { LoginComponent } from './feature/login/login.component';
import { ZilkComponent } from './feature/zilk/zilk.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'zilk', component: ZilkComponent, canActivate: [AuthGuard] },
  { path: '**',  redirectTo: 'login' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
