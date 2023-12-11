
//Mostre no console.log a mensagem "Ano novo está chegando!!";

const newYear = "New year is coming";

console.log(newYear)

//Crie uma variável que receba o nome da cantora Mariah Carey
const singer = "Mariah Carey";

//Crie uma variável que receba a idade dela
const age = 54;

//Crie uma variável com o ano atual e subtraia pelo o valor da idade da Mariah Carey

const currentYear = 2023;
let checkAge = (currentYear - age)

console.log(checkAge)

/*Crie uma variável para guardar a data de nascimento da Mariah Carey (Simples, é só pegar o ano atual e subtrair pela a idade dela 😉)
Mostre no console a data de nascimento da Mariah Carey*/

const dateOfBirth = 1969;
console.log(dateOfBirth)

/*Crie uma variável chamada “quartaFeira” e atribua à ela o valor booleano que representa verdadeiro ou falso e mostre a saída no console.log;
Exiba no console o tipo de dado da váriavel quartaFeira;*/

let quartaFeira = true;

console.log(typeof quartaFeira)

/*Crie uma condição  SE você for maior ou igual 18 retornará  a mensagem:  Você é 
maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey. 
SENÃO for maior ou igual a 18,  retorne a seguinte mensagem:  "Sinto muito, mas assistirá da tv globo"*/

let yourAge = 18;

if (yourAge >= 18) {


    console.log("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey. ");
}
else {
    console.log("Sinto muito, mas assistirá da tv globo")

};

/*Crie uma condição que exiba uma mensagem no console se você fizer aniversário em Agosto OU Dezembro OU JUNHO. Caso seja verdadeira a 
informação, retorne essa mensagem: Uma ou mais opções estão corretas. 
O mês escolhido foi o mês tal. Caso a informação seja falsa, retorne a seguinte mensagem:  Algo de errado não está certo, o mês digitado foi o mês tal.*/ 


let monthHappyBirthday  = "Agosto"; 

if (monthHappyBirthday === "Agosto" || monthHappyBirthday === "Dezembro" || monthHappyBirthday === "Junho") {
    console.log(`Uma ou mais opções estão corretas. O mês escolhido foi ${monthHappyBirthday}.`);
} else {
    console.log(`Algo de errado não está certo. O mês digitado foi ${monthHappyBirthday}.`);
}