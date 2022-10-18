let nombreProductoA = "Mother AMD"
let precioProductoA = 15000
let stockProductoA = 10

let nombreProductoB = "Mother INTEL"
let precioProductoB = 18000
let stockProductoB = 15

let nombreProductoC = "Micro AMD"
let precioProductoC = 7500
let stockProductoC = 9

let nombreProductoD = "Micro INTEL"
let precioProductoD = 8600
let stockProductoD = 5

let nombreProductoE = "RAM 4gb"
let precioProductoE = 2000
let stockProductoE = 20

let nombreProductoH = "Grafica AMD"
let precioProductoH = 30000
let stockProductoH = 10

let nombreProductoI = "Grafica GeForce"
let precioProductoI = 50000
let stockProductoI = 10

let cantidadCompras = prompt("Ingrese la cantidad de productos distintos que quiere comprar: \n- Mother AMD \n- Mother INTEL \n- Micro AMD \n- Micro INTEL\n- RAM 4gb \n- Grafica AMD \n- Grafica GeForce")
let precioTotal = 0; 



function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function calculoStock(cantidad, stock, precio){
    if(stock >= cantidad){
        calculoPrecio(cantidad, precio)
        alert("El precio total es de: $" + (cantidad * precio))
    }
    else{
        alert("No disponemos de esa cantidad en stock. Nuestro stock actual es de: " + stock + " unidades")
    }
}

for(let i = 0; i < cantidadCompras; i++){

    let compra1 = prompt("Ingrese el nombre del producto que quiere comprar: \n- Mother AMD \n- Mother INTEL \n- Micro AMD \n- Micro INTEL\n- RAM 4gb \n- Grafica AMD \n- Grafica GeForce")
    let cantidad1 = prompt("Ingrese la cantidad del producto que quiere comprar:")

    if(compra1 == "Mother AMD"){
        calculoStock(cantidad1, stockProductoA, precioProductoA)
    }
    else if(compra1 == "Mother INTEL"){
        calculoStock(cantidad1, stockProductoB, precioProductoB)
    }
    else if(compra1 == "Micro AMD"){
        calculoStock(cantidad1, stockProductoC, precioProductoC)
    }
    else if(compra1 == "Micro INTEL"){
        calculoStock(cantidad1, stockProductoD, precioProductoD)
    }
    else if(compra1 == "RAM 4gb"){
        calculoStock(cantidad1, stockProductoE, precioProductoD)
    }
    else if(compra1 == "Grafica AMD"){
        calculoStock(cantidad1, stockProductoH, precioProductoD)
    }
    else if(compra1 == "Grafica GeForce"){
        calculoStock(cantidad1, stockProductoI, precioProductoD)
    }
    else{
        alert("PROXIMAMENTE TENDREMOS ESE PRODUCTO")
    }
}
alert("Este es el precio total final de tu compra: $" + precioTotal) 
