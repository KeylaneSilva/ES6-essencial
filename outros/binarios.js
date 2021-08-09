// in
something in somethingItems

// Array
var arvores = new Array('pau-brasil', 'loureiro', 'cedro', 'carvalho', 'sicômoro');

0 in arvores;           // retorna true
3 in arvores;           // retorna true
6 in arvores;           // retorna false
"cedro" in arvores;     // retorna false (voçe deve especificar o número do índice, não o 
                        // valor daquele índice
"length" in arvores;    // retornar true (length é uma propriedade de Array)

