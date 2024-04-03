import { Component, OnInit } from '@angular/core';

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

  persons = [
    { label: 'João', value: '1' },
    { label: 'Maria', value: '2' },
    { label: 'José', value: '3' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
