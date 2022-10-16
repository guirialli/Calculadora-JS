const sinalExist = (equacao) => (equacao.indexOf('+') == -1 && equacao.indexOf('-') == -1 && equacao.indexOf('*') == -1 && equacao.indexOf('/'))

function insertZero(){
    let numero  = document.getElementById('resultado').innerHTML
    if(numero == 0 || !(numero.length <= 8 || numero.indexOf("<br>") != -1 && numero.length <= 22));
    else{
        document.getElementById('resultado').innerHTML = numero + 0 
    }
}

function insertSinal(sinal){
    let equacao = document.getElementById('resultado').innerHTML
    if(sinalExist(equacao)){
       document.getElementById('resultado').innerHTML = equacao + sinal + "<br>"
    }
    else{
       calcular()
       equacao = document.getElementById('resultado').innerHTML
       document.getElementById('resultado').innerHTML = equacao + sinal + "<br>"
    }
        
}
function insert(num){
    let numero  = document.getElementById('resultado').innerHTML
    if(numero ==0){
        document.getElementById('resultado').innerHTML = num
    }
    else if(numero.length <= 8 || numero.indexOf("<br>") != -1 && numero.length <= 22)
        if(num)
        document.getElementById('resultado').innerHTML = numero +num       
}

function clean(){
    document.getElementById('resultado').innerHTML = "0"
}

function back(){
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length-1)
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;

    if(resultado != "0")
        document.getElementById('resultado').innerHTML = eval(resolverBR(resultado))
    
    else
        document.getElementById('resultado').innerHTML = "0" 
}

const  resolverBR = (br) =>{
    const  semBR = br.split("<br>")
    return semBR[0] + semBR[1]
}

