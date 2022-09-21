// let numero 
// let soma = 0;
// while (numero !== 0){
//     numero = Number(prompt("Insira um número"))
//     soma = soma + numero
//     console.log(soma);
// }

// let inputUser = Number(prompt("Insira um número"))

// for (let i = 0; i <= inputUser; i++){
//     console.log(i)
// }

// const array = [2, 3, 9, 5, 4, 1, 8]

// for (let i = array.length-1; i < array.length; i++){
//     console.log(`
//     O numero do índice ${i} é ${array[i]}
//     `)
// }


let usuario = prompt(`Para acessar essa área, digite seu tipo de usuário (A, B ou C)
A = Administrador;
B = Usuário comum;
C = Assinante
`)

while(usuario !== "A"){    
    alert("Acesso negado.")
    usuario = prompt("Digite sua credencial")
}alert("Boas-vindas, adm!")
    
// let tipo

// while(tipo !== "A"){
//     tipo = prompt('INSIRA SEU TIPO DE USUÁRIO (A: administrador, B: comum OU C: assinante)').toUpperCase()
//     if(tipo === "A"){
// alert('Boas-vindas admin')
//     } else {
//         console.log('acesso negado')
//     }
// }

// let usuario = prompt('Escreva sua credencial')  
// while(usuario!== 'a'){
//     alert('Acesso negado')        
//     usuario = prompt('Escreva sua credencial')  
// }alert('Boas vindas, admin!')