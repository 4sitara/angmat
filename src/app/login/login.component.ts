import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpDataService } from '../services/http-data.service';
import { Student } from '../models/student';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  private formSubmitAttempt: boolean;
  FormBuilder: any;
  studentObj : Student = new Student();
  formValue: any;
  
  constructor(private formbuilder: FormBuilder,
    private HttpDataService: HttpDataService) { }

  ngOnInit() {
    this.form = this.FormBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email : ['', Validators.required],
   // });
  })

}

postStudentDetails(){
  {
  this.studentObj.username=this.formValue.value.uname;
  this.studentObj.password=this.formValue.value.pword;
  this.studentObj.email=this.formValue.value.email;
  
  
  this.HttpDataService.postEmployee(this.studentObj)
  .subscribe(res=>{
    console.log(res); 
    alert("Employee Added sucessfully")
    this.formValue.reset();
    this.getAllEmployee();
   
  },
  err=>{
    alert("Something went Wrong")
    let ref=document.getElementById('cancel')
   //ref?.click();
  })
}


}
  getAllEmployee() {
    throw new Error('Method not implemented.');
  }
  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
     // this.authService.login(this.form.value);

}
  }}