import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posting-search',
  templateUrl: './posting-search.component.html',
  styleUrls: ['./posting-search.component.css']
})
export class PostingSearchComponent {
  postings = [
    {
      postingType: 'DESPESA', postingDescription: 'Compra de pão', dueDate: new Date(2017, 6, 30),
      paymentDate: null, postingValue: 4.55, person: 'Padaria do José'
    },
    {
      postingType: 'RECEITA', postingDescription: 'Venda de software', dueDate: new Date(2017, 6, 10),
      paymentDate: '09/06/2017', postingValue: 80000, person: 'Atacado Brasil'
    },
    {
      postingType: 'DESPESA', postingDescription: 'Impostos', dueDate: new Date(2017, 7, 20),
      paymentDate: null, postingValue: 14312, person: 'Ministério da Fazenda'
    },
    {
      postingType: 'DESPESA', postingDescription: 'Mensalidade de escola', dueDate: new Date(2017, 6, 5),
      paymentDate: '30/05/2017', postingValue: 800, person: 'Escola Abelha Rainha'
    },
    {
      postingType: 'RECEITA', postingDescription: 'Venda de carro', dueDate: new Date(2017, 8, 18),
      paymentDate: null, postingValue: 55000, person: 'Sebastião Souza'
    },
    {
      postingType: 'DESPESA', postingDescription: 'Aluguel', dueDate: new Date(2017, 7, 10),
      paymentDate: '09/07/2017', postingValue: 1750, person: 'Casa Nova Imóveis'
    },
    {
      postingType: 'DESPESA', postingDescription: 'Mensalidade musculação', dueDate: new Date(2017, 7, 13),
      paymentDate: null, postingValue: 180, person: 'Academia Top'
    }
  ];
}
