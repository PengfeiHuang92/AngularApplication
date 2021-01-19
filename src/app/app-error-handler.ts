import { ErrorHandler } from "@angular/core";
//handling the error when calling the service
export class AppErrorHandler implements ErrorHandler{
    handleError(error: any): void {
        alert('An unexpected error occurred.');
    }
    
}