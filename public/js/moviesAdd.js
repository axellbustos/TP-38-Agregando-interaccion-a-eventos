window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', function (e) {
        titulo.style.color = 'blue'
    })
    titulo.addEventListener("mouseout", function (e) {
        titulo.style.color = 'black'
    })

    const Titulo = document.getElementById("titulo")
    let estadoSecreto = 0

    Titulo.addEventListener('keypress',function(e){

        switch (estadoSecreto) {
            case 0:
                e.key === "s" ? ++estadoSecreto : estadoSecreto = 0;
                break;
            case 1:
                e.key === "e" ? ++estadoSecreto : estadoSecreto = 0;
                break;
            case 2:
                e.key === "c" ? ++estadoSecreto : estadoSecreto = 0;
                break;
            case 3:
                e.key === "r" ? ++estadoSecreto : estadoSecreto = 0;
                break;
            case 4:
                e.key === "e" ? ++estadoSecreto : estadoSecreto = 0;
                break;
            case 5:
                e.key === "t" ? ++estadoSecreto : estadoSecreto = 0;
                break;
            case 6:
                e.key === "o" ? ++estadoSecreto : estadoSecreto = 0;
                estadoSecreto === 7 && alert("SECRETO MAGICO")
                estadoSecreto = 0;
                break;
            default:
                estadoSecreto = 0;
                break;
        }
    })

}