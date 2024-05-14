const btnAcessar = document.querySelector("[data-acessa]");

btnAcessar.addEventListener('click', () => {
    let dados = JSON.parse(localStorage.getItem('cadastro')) || false; 

    dados == false ? alert('Você ainda não possui uma conta.') : window.location.href = './pages/Perfil.html';
   

})

