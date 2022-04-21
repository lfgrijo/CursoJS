var sel = document.getElementById('selection')
var num = document.getElementById('numtxt')
var ana = document.getElementById('resultado')
var n_in=[]

function adiciona(){
    //window.alert(num.value)
    if (Number(num.value)<1 || Number(num.value)>100){
        alert("numero tem que estar entre 1 e 100")
    }  else if (inlist(num.value,n_in)) {
        alert("numero já está na lista")
    } else {
        var opt = document.createElement('option')
        opt.text = `${num.value}`
        sel.appendChild(opt)
        resizeBy.innerHTML=''
        }  
    for (var i=0;i<sel.length;i++){
        n_in[i]=Number(sel.options[i].text)
    }
    num.value=''
    num.focus()
}
function analisa(){
    if (n_in.length==0){
        alert('não há elementos')
    } else {
        let tot = n_in.length
        let maior =n_in[0]
        let menor =n_in[0]
        for (let pos in n_in){
            if (n_in[pos]>maior)
                maior=n_in[pos]
            if (n_in[pos]<menor)
                menor=n_in[pos]
        }
        ana.innerHTML =''
        ana.innerHTML += `<p> Ao todo temos ${tot} números cadastrados`
        ana.innerHTML += `<p> O mairo valor é ${maior}`
        ana.innerHTML += `<p> O menor valor é ${menor}`
    }
}

function inlist(n,l){
    if (l.indexOf(Number(n))!=-1){
        return true
    } else {
        return false
    }
}