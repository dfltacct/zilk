import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZilkComponent } from './feature/zilk/zilk.component';

const routes: Routes = [
  { path: '', component: ZilkComponent },
  {
    path: 'zilk',
    component: ZilkComponent,
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
