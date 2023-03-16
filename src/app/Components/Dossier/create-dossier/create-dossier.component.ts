import { Component ,ViewEncapsulation} from '@angular/core';
import {FormBuilder ,FormGroup ,Validators ,FormControl} from "@angular/forms"
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-create-dossier',
  templateUrl: './create-dossier.component.html',
  styleUrls: ['./create-dossier.component.css']
})
export class CreateDossierComponent {
  public phoneNumberValue: string = "";
  public phoneNumberMask: string = "(999) 000-00-00-00";

form !: FormGroup;

  public data: any = {
    fullName: "",
    email: "",
    dossierNumber: this.phoneNumberValue,
    arrivalDate: null,
    numberOfNights: null,
    numberOfGuests: null,
    terms: false,
    comments: "",
  };

  constructor(private api :GenericService) {
    this.form = new FormGroup({
      fullName: new FormControl(this.data.fullName, [Validators.required]),
      email: new FormControl(this.data.email, [
        Validators.required,
        Validators.email,
      ]),
      dossierNumber: new FormControl(this.data.dossierNumber, [
        Validators.required,
      ]),
      ageBuilding: new FormControl(this.data.arrivalDate, [
        Validators.required,
      ]),
      numberOfNights: new FormControl(this.data.numberOfNights, [
        Validators.required,
      ]),
      numberOfGuests: new FormControl(this.data.numberOfGuests, [
        Validators.required,
        Validators.max(5),
      ]),
      terms: new FormControl(this.data.terms, [Validators.requiredTrue]),
      comments: new FormControl(this.data.comments),
    });
  }

  public submitForm(): void {
    this.form.markAllAsTouched();
  }

  public clearForm(): void {
    this.form.reset();
  }
}
