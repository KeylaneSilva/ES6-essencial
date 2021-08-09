const users = ['Ricardo', 'Keylane', 'Karyne'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W'),
}

const persons = [
    {
        name: 'Keylane',
        age: 21,
        gender: gender.WOMAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age:30,
        gender: gender.MAN
    },
];

// Retornar a quantidade de itens de um array
console.log('Itens: ', persons.length);

// Verifica se é array
console.log('A variável person é um array: ', Array.isArray(persons));

// Iterar os itens do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`)
})

// Filtrar array - Imutabilidade
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

// Retornar um novo array
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});

console.log('\nPessoas com a adição do course:', personsWithCourse);

// Transformar o array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0); // valor inicial do age

console.log('\nSoma de idade das pessoas', totalAge);

// Juntando operações
const totalEvenAges = persons   
                        .filter(person => person.age % 2 == 0)
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);

console.log('\nSoma de todas as idades das pessoas que possuem idade par: ', totalEvenAges);

console.log('--------------------------------------------------------------------')

// DESAFIO
const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

console.log('Empresas criadas depois dos anos 2000')

const Empressas2000 = empresas  
                        .filter(empresa => empresa.anoDeCriacao > 2000)
                        /*  .reduce((quant, empresa) => {
                            quant++;
                            return quant;
                            }, 0)
                        */
console.log('\nEmpresas criadas depois dos anos 2000: \n', Empressas2000,'\n')

console.log('O nome de cada empresa e de seu CEO')

const infoEmp = empresas.map(empresa => `${empresa.nome}` + 'CEO: ' + `${empresa.CEO}`)
console.log(infoEmp)

// empresas.forEach(empresa => {
//     console.log(`Nome da empresa: ${empresa.nome}`)
//     console.log(`CEO: ${empresa.CEO}\n`)

// } )

console.log('O valor de todas as empresas somadas')

const totValueEmp = empresas
                        .reduce((tot, empresa) => {
                            tot += empresa.valorDeMercado
                            return tot
                        }, 0)
console.log('Valor total das empresa somadas: ', totValueEmp)

console.log('-----------------------------------------------')

// forEach
const num = [1,2,3,4,5]

num.forEach((value, index) => {
    console.log(`${index}: ${value}`)
})

// map - retorna um novo array, do mesmo tamanho e interando cada item de um array

const mult = num.map(numb => numb * 2)
console.log(mult);

// flat - retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada(depth)

const idades = [21, 25, [30, 49, [50, 88]]]
//console.log(idades)

idades.flat(2)

// flatMap - retorna um novo array assim como a função map e executa um flat de profundidade 1 

const arr = [1,2,3,4]

arr.flatMap(value => [value * 2])
arr.flatMap(value => [[value * 2]])

const arrInterator = arr.values()
arrInterator.next()
arrInterator.next()
arrInterator.next()
arrInterator.next()

// entries - retorna um Array Iterato que contém os pares chave/valor para cada elemento do array

const arr = [1,2,3,4]

const arrInterator = arr.entries()
arrInterator.next()
arrInterator.next()
arrInterator.next()
arrInterator.next()

// find - retorna o primeiro item de um array que satisfaz a condição

const arr2 = [1,2,3,4]

const firstGreaterThanTwo = arr2.find(value => value > 3)
console.log(firstGreaterThanTwo)

// findIndex - retorna o index do primeiro item de um array que satisfaz a condição

const arr2 = [1,2,3,4]

const firstGreaterThanTwo = arr2.findIndex(value => value > 2)
console.log(firstGreaterThanTwo)

// filter - retorna um novo array com todos os elementos que satisfazem a condição

const arr2 = [1,2,3,4]

const newArray2 = arr2.filter(value => value > 2)
console.log(newArray2)

// indexOf - retorna o primeiro índice em que um elemento pode ser encontrado no array

const arr = [1,3,3,4,3]
const firstIndexOfItem = arr.indexOf(3);
console.log(firstIndexOfItem)

// lastIndexOf - retorna o ultimo índice em que um elemento pode ser encontrado no array

const arr = [1,3,3,4,3]
const firstIndexOfItem = arr.lastIndexOf(3);
console.log(firstIndexOfItem)

// includes - retorna um booleano verificando se determinado elemento existe no array

const arr = [1,3,3,4,3]
const hasItemOne = arr.includes(1)
const hasItemTwo = arr.includes(2)
console.log(hasItemOne)
console.log(hasItemTwo)

// some - retorna um booleano verificando se pelo menos um item de um array satisfaz a condição

const arr = [1,3,3,4,3]
const hasSomeEverNumber = arr.some(value => value % 2 == 0)
console.log(hasSomeEverNumber)

// every - retorna um booleano verificando se todos os itens de um array satisfazem a condição

const arr = [1,3,3,4,3]
const hasSomeEverNumber = arr.every(value => value % 2 == 0)
console.log(hasSomeEverNumber)

// sort - ordena os elementos de um array de acordo com a condição

const arr = [1,3,3,4,3,2]
console.log(arr.sort((current, next) => current - next))

// reverse - inverte os ele,emtos de um array

const arr2 = [1,2,3,4]
console.log(arr2.reverse())

// TRANSFORMAR EM OUTRO TIPO DE DADOS

// join - junta todos os elementos de um array, separados por um delimitador e retorna uma string

const arr = [1,2,3,4,5]
console.log(arr.join('-'))

// reduce
const arr = [1,2,3,4,5]
const newArray = arr.reduce((total, value) => total += value, 0)
console.log(newArray)





