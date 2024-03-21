import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posting-search',
  templateUrl: './posting-search.component.html',
  styleUrls: ['./posting-search.component.css']
})
export class PostingSearchComponent {
  postings = [
    {
      postingType: 'DESPESA', postingDescription: 'Compra de pão', dueDate: '30/06/2017',
      paymentDate: null, postingValue: 4.55, person: 'Padaria do José'
    },
    {
      postingType: 'RECEITA', postingDescription: 'Venda de software', dueDate: '10/06/2017',
      paymentDate: '09/06/2017', postingValue: 80000, person: 'Atacado Brasil'
    },
    {
      postingType: 'DESPESA', postingDescription: 'Impostos', dueDate: '20/07/2017',
      paymentDate: null, postingValue: 14312, person: 'Ministério da Fazenda'
    },
    {
      postingType: 'DESPESA', postingDescription: 'Mensalidade de escola', dueDate: '05/06/2017',
      paymentDate: '30/05/2017', postingValue: 800, person: 'Escola Abelha Rainha'
    },
    {
      postingType: 'RECEITA', postingDescription: 'Venda de carro', dueDate: '18/08/2017',
      paymentDate: null, postingValue: 55000, person: 'Sebastião Souza'
    },
    {
      postingType: 'DESPESA', postingDescription: 'Aluguel', dueDate: '10/07/2017',
      paymentDate: '09/07/2017', postingValue: 1750, person: 'Casa Nova Imóveis'
    },
    {
      postingType: 'DESPESA', postingDescription: 'Mensalidade musculação', dueDate: '13/07/2017',
      paymentDate: null, postingValue: 180, person: 'Academia Top'
    }
  ];
}
