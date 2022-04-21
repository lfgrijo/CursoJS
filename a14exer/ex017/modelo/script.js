alert('oi')
function calcula(){
    var fat=Number(document.getElementById('fator').value)
    var res=document.querySelector('div#resultado')
    var tab=document.getElementsByTagName('select')[0]
    tab.innerHTML=''
    for (var i=0;i<11;i++){
        var opt = document.createElement("option")
        opt.text=`${i} x ${fat} = ${fat*i}`
        opt.value=`opt${i}`
        tab.add(opt)
    }
}