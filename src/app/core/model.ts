export class Address {
  street: string;
  addressNumber: string;
  complement: string;
  district: string;
  zipCode: string;
  city: string;
  addressState: string;
}

export class Cateogry {
  id: number;
}

export class Person {
  id: number;
  personName: string;
  active: boolean;
  address: Address = new Address();
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
