import faker from 'faker'



export class User {
  name: string;
  location:{
    lat: number;
    lan: number;
  };

  constructor (){
      this.name = faker.name.findName();
      this.location ={
        lat: parseFloat(faker.address.latitude()),
        lan: parseFloat(faker.address.latitude())
      };
      
  }
}

