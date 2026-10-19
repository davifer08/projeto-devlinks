function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    // pegar a tag image
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if(html.classList.contains('light')){
        // se tiver light mode, aicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, de óculos escuros e usando uma jaqueta preta')

    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.')
    }

}