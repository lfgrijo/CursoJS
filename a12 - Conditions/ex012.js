var a = new Date()
var hora = a.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora>18 || hora < 3){
    console.log("boa noite")
} else if (hora>12){
    console.log("boa tarde")
} else {
    console.log("boa dia")
}