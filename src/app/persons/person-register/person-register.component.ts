import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Person } from 'app/core/model';
import { PersonService } from '../person.service';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'app/core/error-handler.service';

@Component({
  selector: 'app-person-register',
  templateUrl: './person-register.component.html',
  styleUrls: ['./person-register.component.css']
})
export class PersonRegisterComponent implements OnInit {
  postingTypes = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];

  categories = [
    { label: 'Alimentação', value: 'ALIMENTACAO' },
    { label: 'Transporte', value: 'TRANSPORTE' },
  ];

  person = new Person();

  constructor(private errorHandlerService: ErrorHandlerService,
              private personService: PersonService,
              private toastyService: ToastyService) {
  }

  ngOnInit() {
  }

  save(form: FormControl) {
    this.person.active = true;

    this.personService.save(this.person)
      .then(() => {
        this.toastyService.success('Cadastro realizado com sucesso!');

        form.reset();

        this.person = new Person();
      })
      .catch(error => this.errorHandlerService.handle(error));
  }
}
