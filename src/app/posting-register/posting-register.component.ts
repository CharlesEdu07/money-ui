import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-posting-register',
  templateUrl: './posting-register.component.html',
  styleUrls: ['./posting-register.component.css']
})
export class PostingRegisterComponent implements OnInit {
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

  save(form: NgForm) {
    console.log(form.value);
  }
}
