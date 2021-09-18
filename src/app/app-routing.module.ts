import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragComponent } from './drag/drag.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { GridComponent } from './grid/grid.component';





//import { LoginComponent } from './login/login.component';

const routes: Routes = [
 // { path: 'login', component: LoginComponent},
 { path: 'header', component: HeaderComponent},
 { path: 'grid', component: GridComponent},

   { path: 'drag', component: DragComponent},
   { path: 'table', component: TableComponent},

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
