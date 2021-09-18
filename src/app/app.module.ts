import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { DragComponent } from './drag/drag.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { HeaderComponent } from './header/header.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { MatInputModule } from "@angular/material/input";  
import { MatButtonModule } from '@angular/material/button';  
import { MatDatepickerModule } from '@angular/material/datepicker';  
import { MatMenuModule } from '@angular/material/menu';  
import { MatNativeDateModule } from '@angular/material/core';  
import { MatIconModule } from '@angular/material/icon';  
import { MatSidenavModule } from '@angular/material/sidenav';  
import { MatFormFieldModule } from '@angular/material/form-field';  
import { MatTooltipModule } from '@angular/material/tooltip';  
import { MatToolbarModule } from '@angular/material/toolbar';  
import { MatRadioModule } from '@angular/material/radio';  
import { MatCheckboxModule } from '@angular/material/checkbox';  
import { MatSelectModule } from '@angular/material/select';  
import { MatSnackBarModule } from '@angular/material/snack-bar';  
import { MatTableModule } from '@angular/material/table';  
import { CdkTableModule } from '@angular/cdk/table';  
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    DragComponent,
    LoginComponent,
    DialogComponent,
    DialogExampleComponent,
    HomeComponent,
    CardComponent,
    GridComponent
  ],
  entryComponents: [DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatGridListModule,
    
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,  
    MatNativeDateModule,  
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,  
    BrowserAnimationsModule,  
    MatButtonModule,  
    MatMenuModule,  
    MatDatepickerModule,  
    MatNativeDateModule,  
    MatIconModule,  
    MatRadioModule,  
    MatCardModule,  
    MatSidenavModule,  
    MatFormFieldModule,  
    MatInputModule,  
    MatTooltipModule,  
    MatToolbarModule,  
    AppRoutingModule,  
    MatCheckboxModule,  
    MatSelectModule,  
    MatSnackBarModule,  
    MatTableModule,  
    CdkTableModule,  
    MatPaginatorModule,
    DragDropModule,
    HttpClientModule,
    MatDialogModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
