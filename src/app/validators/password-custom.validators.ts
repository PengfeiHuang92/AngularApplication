import { AbstractControl, ValidationErrors } from "@angular/forms";

export class passwordCustomValidator {
    //precondition: control must contain string value.
    //postcondition: return true if control value contains any space. otherwise return null 
    static noneSpace(control:AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf(' ') >=0)
            return {noneSpace: true};
        return null;
    }
    
}