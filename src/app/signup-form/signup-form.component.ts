import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent  {
  form = new FormGroup({
    // Single validator
    // username : new FormControl('',Validators.required),
    // password : new FormControl('',Validators.required)
    'username' : new FormControl(' ',[
      Validators.required,
      Validators.minLength(4)
    ]),
    'password' : new FormControl(' ',[
      Validators.required
    ])
  });

  //Properties
  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }
  log(x:any){console.log(x);}
}
