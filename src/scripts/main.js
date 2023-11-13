    document.getElementById('form-cadastro').addEventListener('submit', function(evento){
        evento.preventDefault();

        const nome = document.getElementById('nome').value;
        const numero = document.getElementById('numero').value;
        const serie = document.getElementById('serie').value;
    
        if(nome && numero && serie) {
        document.querySelector('.sucesso').style.display = 'block'
        }
    });