function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'images/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'images/tarde.jpg'
        document.body.style.background = '#A5DBDD'
    } else {
        img.src = 'images/noite.jpg'
        document.body.style.background = '#02225A'
    }
}