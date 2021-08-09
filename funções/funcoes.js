function getName(){
      return 'Keylane da Silva Elvas de Sá'
}

function logFn(fn){
      console.log(fn())
}
// logFn(getName) // Keylane da Silva Elvas de Sá

const logFnResult = logFn;

console.log(logFnResult(getName));