import { usernameCustomValidator } from './../validators/username-custom.validators';
import { confirmPasswordCustomValidators } from './../validators/confirmPassword-custom.validators';
import { passwordCustomValidator } from '../validators/password-custom.validators';
import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent  {
//-----------------------------------------------------------
  //form = new FormGroup({
    // Single validator
    // username : new FormControl('',Validators.required),
    // password : new FormControl('',Validators.required)
  //});
//-----------------------------------------------------------
  form = new FormGroup({
    //username is . required,
    //            . minimum length four characters 
    //            . can not contain space
    //            . must be unique (Asynchronous Function)
    username : new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      usernameCustomValidator.noneSpace
    ],usernameCustomValidator.shouldbeUnique),
    //password is . required,
    //            . minimum length four characters 
    //            . can not contain space
    password : new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      passwordCustomValidator.noneSpace
    ]),
    //confirmPassword is . required,
    //                   . must match with password
    confirmPassword: new FormControl('',[
      Validators.required
    ])
  },[confirmPasswordCustomValidators.passwordShouldMatch]
   );
//------------------------------------------------------------
//creating the same FormGroup by FormBuilder
  // form: FormGroup;

  // constructor(fb:FormBuilder){
  //   this.form = fb.group({
  //     username:['',[
  //     Validators.required,
  //     Validators.minLength(4),
  //     usernameCustomValidator.noneSpace],
  //     usernameCustomValidator.shouldbeUnique
  //   ],
  //     password:['',[
  //     Validators.required,
  //     Validators.minLength(4), 
  //     passwordCustomValidator.noneSpace]
  //   ],
  //     confirmPassword:['',[
  //     Validators.required,
  //     ]
  //   ]
  //   },
  //   //formGroup Level validator
  //   {
  //     validator:confirmPasswordCustomValidators.passwordShouldMatch
  //   });
  // }


  //Properties username
  get username(){
    return this.form.get('username');
  }
  //Properties password
  get password(){
    return this.form.get('password');
  }

  get confirmPassword(){
    return this.form.get('confirmPassword');
  }
  log(x:any){console.log(x);}
}
