function verificar(){
    var data=new Date()
    var ano = data.getUTCFullYear()
    var form_ano = document.getElementById('txtano')
    var res = document.querySelector('div#resultado')
    if (form_ano.value.length ==0 || form_ano.value >ano){
        window.alert('Erro, verifique os dados')
    } else{
        //window.alert('tudo ok!')
        var form_sex = document.getElementsByName('radsex')
        var i = ano - Number(form_ano.value)
        //res.innerHTML=`idade calculada ${i}`
        var gênero =''
        //criando imagem dinamicamente
        var img = document.createElement("img") //img de dentro do parentese é a tag
        img.setAttribute('id','foto')
                if (form_sex[0].checked){
            gênero = "Homem"
            if (i<15){
                img.setAttribute('src','menino.png')
            } else if (i>65){
                img.setAttribute('src','homemidoso.png')
            } else {
                img.setAttribute('src','homemjovem.png')
            }
        } else if (form_sex[1].checked) {
            gênero = "Mulher"
            if (i<15){
                img.setAttribute('src','menina.png')
            } else if (i>60) {
                img.setAttribute('src','mulheridosa.png')
            } else {
                img.setAttribute('src','mulherjovem.png')
            }   
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${i} anos.`
        res.appendChild(img) //adiciona "ao body" o elemento criado dinamicamente
    } 
}