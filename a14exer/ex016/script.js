function contar(){
    var i=document.getElementById('ini').value
    var f=document.getElementById('fim').value
    var p=document.getElementById('passo').value
    //var res=document.getElementById('result') //alternativa para a escrit a do resultado, nao precisaria ficar repetindo toda linha de codigo vairas vezes
    var p=Number(p)
    var i=Number(i)
    var f=Number(f)
    //alert(`${p}`+typeof p) //string
    if (i<0 || f<0 || p<0){
        alert('Erro - falta algum input')
        if (i==0 && f==0 && p==0){
            document.getElementById('result').innerHTML="0"
        }
    } else{
        if (p==0){
            p=1
        }
        document.getElementById('result').innerHTML=''
        if (f>i){
            for (var a=i;a<=f;a=a+=p){
                document.getElementById('result').innerHTML+=`${a} \u{1F449}`
            }  
            document.getElementById('result').innerHTML+='\u{1F3C1}'
        }else {
            for (var a=i;a>=f;a-=p){
                document.getElementById('result').innerHTML+=`${a} \u{1F449}`
            }
            document.getElementById('result').innerHTML+='\u{1F3C1}'
        }
    }
}