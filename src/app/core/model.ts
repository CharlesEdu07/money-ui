export class Person {
  id: number;
}

export class Cateogry {
  id: number;
}

export class Posting {
  id: number;
  postingType: string = 'RECEITA';
  postingDescription: string;
  dueDate: Date;
  paymentDate: Date;
  postingValue: number;
  observation: string;
  person: Person = new Person();
  category: Cateogry = new Cateogry();
}
