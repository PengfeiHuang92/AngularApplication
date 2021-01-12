import { AbstractControl } from '@angular/forms';
export class confirmPasswordCustomValidators {
    //preconditon: password and confrimpassword must not be none
    //postCondition: Return true if new password and confirm password does not match, otherwise return null
    static passwordShouldMatch(control:AbstractControl){

        let newPassword = control.get('password');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword?.value !== confirmPassword?.value)
            return {passwordShouldMatch: true};

        return null;
    }
}