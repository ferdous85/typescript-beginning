let apples: number = 5

let speed:string = 'fast'
let hasName: boolean = true

let nothingMuch : null = null

let nothing: undefined = undefined

let day: Date = new Date()
//array 
let colors: string[] = ['red', 'green', 'blue']
let myNum: number[]=[1,2,3]
let truths:boolean[] = [true,false,true]

//class
class Car {

}

let car: Car = new Car()

//object literal
let point:{ x:number; y: number } = {
  x: 10,
  y:10
}

//Function
const logNumber: (i:number) =>void = (i: number)=>{
  console.log(i);  
}

// 3) Variable whose type cannot be inferred

let numbers = [-10,-1,12]
let numberAboveZero: boolean | number = false

for(let i=0; i<numbers.length; i++){
  if(numbers[i]> 0){
    numberAboveZero = numbers[i]
    
    
  }
    
}



