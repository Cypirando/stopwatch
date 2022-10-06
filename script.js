//==============================constantes=========================//
//const iniciarr = document.getElementById('iniciar').style.display 
//const reiniciarr = document.getElementById('reiniciar').style.display 
//const pararr = document.getElementById('parar').style.display 
//const voltarr = document.getElementById('volt').style.display
//==============================variaveis===========================//
let mileseg = 0
let seg=0
let min=0
let interval         
let quant=0
let arrayCronometro = new Array()


//==============================funções==============================//                        

//quando carregar a pagina 
function onload(){
   //const pararr="none"
    document.getElementById('iniciar').style.display = ''
    document.getElementById('reiniciar').style.display = 'none'
    document.getElementById('parar').style.display = "none"
    document.getElementById('volt').style.display = "none"
}   
function relogio(){
    mileseg++
    if (mileseg==100){
        seg++
        mileseg = 0
        if(seg==60){
            min++
            seg = 0
        }
    }
   document.getElementById('relogio').innerHTML= doisdigitos(min) + ":" + doisdigitos(seg) + ":" + mileseg
}   
function doisdigitos(digit){
    if(digit<10){
        return['0'+ digit]
    }else{
        return(digit)
    }
}                                                                                
function iniciar(){  
    relogio()
    interval=setInterval(relogio,10)    //================================================== 


    document.getElementById('iniciar').style.display = 'none'
    document.getElementById('reiniciar').style.display = 'none'
    document.getElementById('parar').style.display = ""
    document.getElementById('volt').style.display = ""
}
function para(){
    clearInterval(interval)

    document.getElementById('parar').style.display = 'none'
    document.getElementById('volt').style.display = 'none'
    document.getElementById('reiniciar').style.display = ''
    document.getElementById('iniciar').style.display = ""

}
function reiniciar(){
    clearInterval(interval)                                     //clearInterval *-* tem o papel 
    mileseg=0                                                   //de interromper o setInterval
    seg=0
    min=0
    window.document.getElementById("relogio").innerHTML='00:00.0'
    document.getElementById('volta').innerHTML=""
   quant = 0
}

function vol(){      
    //como colocar isso em lista!
    
    quant++;
    let f = window.document.getElementById("volta").value=
    `${quant}ª: ${doisdigitos(min)} : ${doisdigitos(seg)} : ${mileseg}`;
    let v = document.getElementById('volta')
    v.innerHTML += `<br> ${f} <br>`

    arrayCronometro.push(f) // insere os numeros no array
    calcularDiferença()
   
}
// function temVolta(){
//     quant++;
//     let m = window.document.getElementById("tempoVolta").value=
//     valorFinal
//     let x = document.getElementById('tempoVolta')
//     x.innerHTML += `<br> ${m} <br>`
// }
function calcularDiferença() {
    for(let i = 0; i < arrayCronometro.length; i++) { // recebe o primeiro resultado
        let primeiroNumero = arrayCronometro[i];
        let numeroNormal = primeiroNumero.split(":"); // remove os posntos para fazer a subtraçao 
        if(arrayCronometro.length % 2 == 0) {
            i++
            let segundoNumero = arrayCronometro[i]; //recebe o segundo resultado
            let segundoNumeroNormal = segundoNumero.split(":");
            subtrairArrays(numeroNormal, segundoNumeroNormal)
            arrayCronometro.unshift(); // funcao que n deixa repetir valores 
            arrayCronometro.pop(); // remove o ultimo valor repetido
        }
    }
 
}

function subtrairArrays(num1, num2) {
    let firstArray = {primeiro:num1[1], segundo:num1[2], terceiro:num1[3]};
    let secondArray = {primeiro:num2[1], segundo:num2[2], terceiro:num2[3]};
    let primeiroSubtracao = firstArray.primeiro - secondArray.primeiro;
    let segundoSubtracao = firstArray.segundo - secondArray.segundo; 
    let terceiraSubtracao = firstArray.terceiro - secondArray.terceiro; 
// condiçao pra ver se o primeiro valo é maio que o segundo para n dar numero negativo
    if(firstArray.primeiro > secondArray.primeiro) {
        primeiroSubtracao =  firstArray.primeiro - secondArray.primeiro;
    } else {
        primeiroSubtracao =  secondArray.primeiro - firstArray.primeiro
    }

    if(firstArray.segundo > secondArray.segundo) {
        segundoSubtracao =  firstArray.segundo - secondArray.segundo;
    } else {
        segundoSubtracao =  secondArray.segundo - firstArray.segundo
    }

    if(firstArray.terceiro > secondArray.terceiro) {
        terceiraSubtracao =  firstArray.terceiro - secondArray.terceiro;
    } else {
        terceiraSubtracao =  secondArray.terceiro - firstArray.terceiro
    }

    let valorFinal = `${primeiroSubtracao} : ${segundoSubtracao} : ${terceiraSubtracao}`

    console.log(valorFinal)
    // quant++;
    let m = window.document.getElementById("tempoVolta").value=
    valorFinal
    let x = document.getElementById('tempoVolta')
    x.innerHTML += `<br> ${m} <br>`
}


//quant + `º  ` + doisdigitos(min) + ":" + doisdigitos(seg) + ":" + mileseg 
 






/*function vol(){
    document.getElementById('pause').style.display = 'inline'
}*/

//document.getElementById('idDoBotao').style.display = 'none';// faz o botão sumir
//document.getElementById('idDoBotao').style.display = 'inline'; ou = ''// faz o botao aparecer
