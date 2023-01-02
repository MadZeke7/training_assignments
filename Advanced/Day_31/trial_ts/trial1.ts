const myFirstVar : string = "Hello Fren";

function sayName({ first, last = 'Smith' }: {first: string; last?: string }): void {
    const name = first + ' ' + last;
    console.log(name);
}
  
console.log(myFirstVar);
sayName({ first: 'Evin', last: 'Renji' });