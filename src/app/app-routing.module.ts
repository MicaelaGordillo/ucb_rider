import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { MotorcyclesComponent } from './motorcycles/motorcycles.component';

// Definición
// Rutas de navegación
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'motorcycles', component: MotorcyclesComponent},
  {path: 'form', component: FormComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
