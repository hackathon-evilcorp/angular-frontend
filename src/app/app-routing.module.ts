import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FridgeComponent } from './components/fridge/fridge.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { CreateFridgeComponent } from './components/create-fridge/create-fridge.component';
import { CreatePostitComponent } from './components/create-postit/create-postit.component';


const routes: Routes = [
  { path: 'fridge/:id', component: FridgeComponent},
  { path: 'addfridge', component: CreateFridgeComponent},
  { path: 'addpostit', component: CreatePostitComponent},
  { path: 'fridge/edit/postit/:id', component: CreatePostitComponent},
  //{ path: 'fridge/delete/postit/:id', component: DeletePostitComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FridgeComponent, LoginComponent, CreatePostitComponent]

