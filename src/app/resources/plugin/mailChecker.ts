import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class MailChecker {

    /*isValidEmail(fieldname: string, form: NgForm): Boolean {

        if (form && form.controls[fieldname]) {
          let value = form.controls[fieldname].value;
    
          const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
          const match = value.match(emailPattern);
          return match;
        }
    
        return false;
      }*/

    isValidTelephone(fieldname: string, form: NgForm): Boolean {

        if (form && form.controls[fieldname]) {
            let value = form.controls[fieldname].value;

            const phonePattern = /^\+?[1-9]\d{9,14}$/;
            const result = phonePattern.test(value);

            if (!result)
                form.controls[fieldname].setErrors({ 'invalidPhoneNumber': 'true' });

            return result;
        }
        return false;

    }

    onCheckboxChange(event: any, accademyType: string[]) {
        const value = event.target.value;
        const isChecked = event.target.checked;
        this.updateCheckboxArray(accademyType, value, isChecked);
    }

    private updateCheckboxArray(array: string[], value: string, isChecked: boolean) {
        if (isChecked) {
            if (!array.includes(value)) {
                array.push(value);
            }
        } else {
            const index = array.indexOf(value);
            if (index > -1) {
                array.splice(index, 1);
            }
        }
    }

    isMoreThan18YearsApart(birthdate: Date): boolean {

        const currentDate = new Date();

        // Calculate the difference in years
        let yearDifference = currentDate.getFullYear() - birthdate.getFullYear();

        // Adjust if the date1's month and day haven't been reached yet in the date2 year
        if (
            currentDate.getMonth() < birthdate.getMonth() ||
            (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())
        ) {
            yearDifference--;
        }

        // Check if the difference is more than 18 years
        return yearDifference >= 18;
    }

}