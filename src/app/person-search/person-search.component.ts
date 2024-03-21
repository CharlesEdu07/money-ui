import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent {
  persons = [
    { personName: 'Manoel Pinheiro', city: 'Uberlândia', stateAddress: 'MG', active: true },
    { personName: 'Sebastião da Silva', city: 'São Paulo', stateAddress: 'SP', active: false },
    { personName: 'Carla Souza', city: 'Florianópolis', stateAddress: 'SC', active: true },
    { personName: 'Luís Pereira', city: 'Curitiba', stateAddress: 'PR', active: true },
    { personName: 'Vilmar Andrade', city: 'Rio de Janeiro', stateAddress: 'RJ', active: false },
    { personName: 'Paula Maria', city: 'Uberlândia', stateAddress: 'MG', active: true }
  ];
}
