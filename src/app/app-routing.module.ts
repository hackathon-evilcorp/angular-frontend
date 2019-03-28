import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FridgeComponent } from './components/fridge/fridge.component';

const routes: Routes = [
  { path: 'fridge', component: FridgeComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FridgeComponent]

