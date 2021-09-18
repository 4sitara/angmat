import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';


//import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  constructor(public dialog:MatDialog) { }
  openDialog(){
    this.dialog.open(DialogExampleComponent);

  }


  //constructor(private authService: AuthService) { }

   onLogout() {
   // this.authService.logout();
  }
}
