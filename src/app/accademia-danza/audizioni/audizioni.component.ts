import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AccademiaDanzaNavbarComponent } from '../navbar/navbar.component';
import { ContactBarComponent } from '../../contact-bar/contact-bar.component';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { RedirectorService } from '../../resources/plugin/redirecorService';
import { MailChecker } from '../../resources/plugin/mailChecker';


export interface MailResponse {
  status: string;
  message: string;
}

@Component({
  selector: 'app-audizioni',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ContactBarComponent,
    AccademiaDanzaNavbarComponent
  ],
  templateUrl: './audizioni.component.html',
  styleUrl: './audizioni.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AccademiaDanzaAudizioniComponent {

  constructor(private http: HttpClient, private redirectorService: RedirectorService, public mailChecker: MailChecker) { }

  @ViewChild('formContact') form: NgForm | undefined;

  remainingTime: number = 9;
  jsonResponse?: MailResponse;
  isMinorenne: boolean = false;
  accademyType: string[] = [];

  onFormSubmitted() {
    if (this.form)
      if (this.form.valid) {

        var parameters = new HttpParams();
        parameters = parameters.append('name', this.form.controls['name'].value)
        parameters = parameters.append('surname', this.form.controls['surname'].value)
        parameters = parameters.append('birthdate', this.form.controls['birthdate'].value)
        parameters = parameters.append('city', this.form.controls['city'].value)
        parameters = parameters.append('telephone', this.form.controls['telephone'].value)
        parameters = parameters.append('email', this.form.controls['email'].value)
        parameters = parameters.append('accademyType', this.accademyType.toString())
        if (this.isMinorenne) {
          parameters = parameters.append('nameParent', this.form.controls['nameParent'].value)
          parameters = parameters.append('surnameParent', this.form.controls['surnameParent'].value)
          parameters = parameters.append('birthdateParent', this.form.controls['birthdateParent'].value)
          parameters = parameters.append('telephoneParent', this.form.controls['telephoneParent'].value)
          parameters = parameters.append('emailParent', this.form.controls['emailParent'].value)
          parameters = parameters.append('isEighteen', false)
        } else
          parameters = parameters.append('isEighteen', true)

        this.http.get(
          'https://www.newstyledance.it/sendMail/audizioni-accademia',
          { params: parameters, responseType: 'text' }).subscribe(
            (response) => {
              console.log("The response is:");
              try {
                this.jsonResponse = JSON.parse(response);
                console.log(this.jsonResponse);

                this.redirectorService.startCountdownAndRedirect("/accademia-danza-chi-siamo", this.remainingTime).subscribe(
                  (time) => {
                    this.remainingTime = time;
                  }
                );
              } catch {
                this.jsonResponse = { status: "error", message: "Response Json Parsing gone wrong!" }
              }


            },
            (error) => {

              try {
                console.error("There was an error!", error);
                this.jsonResponse = JSON.parse(error);
                console.log(this.jsonResponse);
              } catch {
                this.jsonResponse = { status: "error", message: "Response Json Parsing gone wrong!" }
              }
            }
          );
      }

  }

  isValidBirthdate(name: string): boolean {
    if (this.form && this.form.controls[name]) {
      let value = this.form.controls[name].value;
      //console.log(value);

      const datePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;

      // Check if the date string matches the regular expression
      const match = value.match(datePattern);
      if (!match) {
        this.form.controls[name].setErrors({ 'invalidDateFormat': 'true' });
        return false;
      }

      // Extract the day, month, and year from the date string
      const day = parseInt(match[1], 10);
      const month = parseInt(match[2], 10);
      const year = parseInt(match[3], 10);

      // Check if the date is a valid calendar date
      const date = new Date(year, month - 1, day);

      let result = date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === day

      //console.log("result: " + result);

      if (!result)
        this.form.controls[name].setErrors({ 'invalidCalendar': 'true' });

      if (name === 'birthdate' && result) {
        if (this.mailChecker.isMoreThan18YearsApart(date))
          this.isMinorenne = false;
        else
          this.isMinorenne = true;
      }

      if (name === 'birthdateParent' && result && !this.mailChecker.isMoreThan18YearsApart(date)) {
        this.form.controls['birthdateParent'].setErrors({ 'invalidParentDate': 'true' });
        return false;
      }
      return result;
    }
    return false;
  }
}
