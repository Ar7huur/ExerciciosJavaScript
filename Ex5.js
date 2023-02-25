var x
var y
var carac;
var resultado;
/*carac = prompt("forneça um caracter");
y = prompt("forneça um ultimo numero");*/

x = parseInt(prompt("Forneça um numero"));

do {
    carac = prompt('Digite o operador matemático [*, +, / ou -]'); 
}while(carac!="+" && carac!="-" && carac!="/" && carac!="*")
y = parseInt(prompt("Forneça outro numero"));

resultado = carac;

if(resultado == "+"){
    
    resultado = x+y;
    document.write(resultado);

    alert(resultado);
    
}

if(resultado == "-"){
    
    resultado = x-y;
    document.write(resultado);
    alert(resultado);
    
}

if(resultado == "/"){
    
    resultado = x/y;
    document.write(resultado);
    alert(resultado);
    
}

if(resultado == "*"){
    
    resultado = x*y;
    document.write(resultado);
    alert(resultado);
    
}

