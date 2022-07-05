let cantidad = parseInt(prompt("Ingrese un numero"))

for (let i = 1 ; i <= cantidad ; i++) {

    if(i%2===0 && i!=0) {
        document.write(i + "<span> es par </span><br>")
    }

    else {
        document.write(i + "<span> es impar </span><br>")
    }
}