import { AbstractControl, ValidationErrors } from "@angular/forms";

//custom validator for userName

export class usernameCustomValidator{
   
    //precondition: control must contain string value.
    //postcondition: return true if control value contains any space. otherwise return null 
    static noneSpace(control:AbstractControl) : ValidationErrors | null{
        if((control.value as string).indexOf(' ') >=0)
            return {noneSpace: true};
        return null;
    }

    //precondition: control must contain string value.
    //postcondition: return true if control value match with 'admin'. otherwise return null 
    static shouldbeUnique(control:AbstractControl):Promise<ValidationErrors | null>{

        //Asynchronous operation
        //Return a Promise that set the timeout for 2 second (2000 millisecond). 
        return  new Promise((resolve,rejects) =>{
            setTimeout( () => {
                if(control.value ==="admin"){
                    console.log(control.value);
                    resolve ({shouldbeUnique:true});
                }
                else resolve(null);
            }, 2000);
        });
       
    }
}