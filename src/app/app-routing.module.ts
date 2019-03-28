import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FridgeComponent } from './components/fridge/fridge.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { CreateFridgeComponent } from './components/create-fridge/create-fridge.component';


const routes: Routes = [
  { path: 'fridge/:id', component: FridgeComponent},
  { path: 'addfridge', component: CreateFridgeComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FridgeComponent, LoginComponent]

