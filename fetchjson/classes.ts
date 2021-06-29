class Vehicle {
  drive(): void{
    console.log('hello World');
    
  }

  honk(): void{
    console.log("beep");
    
  }
}


const vehicle = new Vehicle()

vehicle.drive()