import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit  {
  signupForm: FormGroup;

  user: User;
  userSubmitted:boolean;
  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(){
    this.signupForm = new FormGroup({
      name: new FormGroup({
        firstname: new FormControl(null, [Validators.required, Validators.minLength(2)]),
        lastname: new FormControl(null, [Validators.required, Validators.minLength(2)])
      }),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required,
        this.patternValidator(/\d/, { hasNumber: true }),
        this.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        this.patternValidator(/[a-z]/, { hasSmallCase: true }),
        this.patternValidator(/[@$!%*#?&+-.;]/, { hasSpecialCharacters: true }),
        Validators.minLength(8), 
        Validators.maxLength(16)])
    }) 
  }

  onSubmit(){
    console.log(this.signupForm);
    this.userSubmitted = true;
    if(this.signupForm.valid){
      // this.user = Object.assign(this.user, this.signupForm.value);
      this.userService.addUser(this.userData());
      this.signupForm.reset();
      this.userSubmitted = false;
      this.router.navigate(['/login']);
    } 
  }

  userData(): User {
    return this.user = {
      username: this.firstname.value + this.lastname.value,
      email: this.email.value,
      password: this.password.value
    }
  }


  hasNumber(control: FormControl){
    if(control.value != null && control.value.length < 2){
      return {minTwoCharacters: true}
    }
 
    return null;
  }

  patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
  
      const valid = regex.test(control.value); 
  
      return valid ? null : error;
    };
  }

//----- getters -------

  get firstname(){
    return this.signupForm.get('name.firstname') as FormControl;
  }

  get lastname(){
    return this.signupForm.get('name.lastname') as FormControl;
  }

  get email(){
    return this.signupForm.get('email') as FormControl;
  }

  get password(){
    return this.signupForm.get('password') as FormControl;
  }
   
}
