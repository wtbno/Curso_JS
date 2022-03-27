/*
Operadores lógicos

&& => AND => E (Todas as expressões precisam ser verdadeiras para retornar true)

|| => OR => OU (Se uma opção da expressão for verdadeira, já é suficiente para ret. true)

! => NOT => NÃO

*/


const expressaoAND = true && true && true && true;
const expressaoOR = true || false || false || false; 
console.log(expressaoOR);
console.log(expressaoAND);

//Exemplo de checagem de login

const usuario = 'Bruno'
const senha ='123456'

const userLog = usuario === 'Bruno' && senha === '123456';
console.log(userLog);