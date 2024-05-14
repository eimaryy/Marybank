const dados = JSON.parse(localStorage.getItem("cadastro"));

const getData = dados.aniversario
const data = new Date(getData)
const dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

const containerPerfil = document.querySelector(".perfil__container")

containerPerfil.innerHTML = `
<img class="perfil__img" src="${dados.imagem}" alt="Foto de perfil da conta">
<h2 class="perfil__nome">Olá, ${dados.nome}</h2>
<p class="perfil__aniversario">Nascido em: ${dataFormatada}</p>
<p class="perfil__email">Email: ${dados.email}</p>
<p class="perfil__cpf">CPF: ${dados.cpf}</p>
<p class="perfil__rg">RG: ${dados.rg}</p>

`

