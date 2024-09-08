function senha(){
    let pass = document.getElementById('pass').value;

    var passc = '123';

    if (pass === passc){
        document.getElementById('resposta').textContent = "Acesso Aprobado";
        resposta.style.color = "#4CAF50";
    }
    else {
        alert('Acesso denegado');
    }
}