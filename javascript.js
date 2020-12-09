function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Erro: Verifcar a Data Digitada')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                // Idosa
                img.setAttribute('src', 'velho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'joven.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'adulta.png')
            } else {
                // Idosa
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos`
        res.appendChild(img)
    }
}