function fn(){
      return 'Code Here 1';
}

const arrowFn = () => 'Code Here 2';

const arrowFn2 = () => {
      //Mais de uma execução
      return 'Code Here 3';
}

// Funções também são objetos 
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(arrowFn());
console.log(fn.prop);

// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções 
const controlFnExec = fnParam => allowed => {
      if(allowed){
            fnParam();
      }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //Executará a função fn
handleFnExecution(); // Não executará a função fn

// controlFnExec como função
function controlFnExec(fnParam){
      return function(allowed){
            if(allowed){
                  fnParam();
            }
      }
}