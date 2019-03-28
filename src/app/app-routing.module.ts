import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FridgeComponent } from './components/fridge/fridge.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'fridge/:id', component: FridgeComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FridgeComponent, LoginComponent]

