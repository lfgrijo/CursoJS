var num=[5, 829 ,2]
console.log(num)
num[3]=6
console.log(num)
num.push(58)
console.log(num)
console.log(num.length)
console.log(num.sort())
for (var pos=0; pos<num.length; pos++){
    console.log(num[pos])
}
//alternativa: fazer algo em cada posicao de uma variavel composta (objeto/array)
for(var pos in num){
    console.log(num[pos])
}
console.log(num.indexOf(58))