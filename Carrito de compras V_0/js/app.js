let frutas = []

const fruta = prompt("Carrito de compras, ¿qué fruta desea comprar?")
frutas.push(fruta)

while(confirm("¿Desea agregar otra fruta al carrito?")){
    const fruta = prompt("¿Qué otra fruta desea comprar?")
    frutas.push(fruta)
}

console.log("Usted compró: ")

frutas.forEach((fruta, index) => {
    console.log(`${index + 1}: ${fruta}`)
})