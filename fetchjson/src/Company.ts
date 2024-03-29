import faker from 'faker'



export class Company {
  companyName: string;
  catchPhrase: string;
  location:{
    lat: number;
    lan: number;
  };

  constructor (){
      this.companyName = faker.company.companyName();
      this.catchPhrase = faker.company.catchPhrase();
      this.location ={
        lat: parseFloat(faker.address.latitude()),
        lan: parseFloat(faker.address.latitude())
      };
      
  }
}

