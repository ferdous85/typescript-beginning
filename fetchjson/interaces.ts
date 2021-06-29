interface Vehicle {
  name:string;
  year:number;
  broken: boolean

}

const oldCivic = {
    name:'civic',
    year: 2000, 
    broken:true
}

const printVihicle = (vehicle: Vehicle): void =>{
  console.log(`Name: ${vehicle.name}`);
  
}

