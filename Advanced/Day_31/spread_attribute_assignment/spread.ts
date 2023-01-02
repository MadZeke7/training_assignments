function sum(...arr:number[]){
    let s:number  = 0;
    for(let n of arr){
        s  = s + n;
    }
    return s;
}

function max(...arr:number[]){
    let max:number = arr[0];
    for(let n of arr){
        if(max < n){
            max = n;
        }
    }
    return max;
}

console.log(`Sum of numbers 10, 20, 30 : ${sum(10,20,30)}`)
console.log(`Sum of numbers 10, 20, 30, 40 : ${sum(10,20,30,40)}`)
console.log(`Sum of numbers 10, 20, 30, 40, 50 : ${sum(10,20,30,40,50)}`)
console.log(`------------------------------------`)
console.log(`Max of numbers 10, 20, 30, 40 : ${max(10, 20, 30, 40)}`)
console.log(`Max of numbers 10, 20, 30, 40, 50, 90, 80 : ${max(10, 20, 30, 40, 50, 90, 80)}`)
