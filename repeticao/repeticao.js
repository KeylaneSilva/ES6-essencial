// for

const array = ['um', 'dois', 'tres']

for(let index = 0; index < array.length; index++){
    const element = array[index]
    console.log(`Element #${index}: ${element}. `)
}

// while

var n = 0;
var x = 0;

while(n < 3){
    n++;
    console.log(n)
    x +=n;
}

console.log(x)

// do while
var i = 0;

do{
    i +=1;
    console.log(i)

}while(i < 5)

//for--in--off
let arr = [3,5,7]
arr.foo = "hello"

for(let i in arr){
    console.log(i)      // logs "0","1","2","foo"
}

for(let i of arr){
    console.log(i)      // logs "3","5","7"
}

// CONTINUE

console.log('\nExempĺo da utilização de continue')
const array = [1,2,3,4,5,6]

for(let index = 0; index < array.length; index++){
    const element = array[index]
    if(element % 2 == 0){
        continue;
    }
    console.log(element)
}