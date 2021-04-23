/*
  por Tag: getElementByTagName()
  por Id: getElementById()
  por Id: getElementByName()
  por Classe: getElementsByClassName()
  por Seletor: querySelector() => usa #
*/

function exibiSinopse1(){
  let verMais1 = window.document.querySelector('#ver-mais1');
  let verMenos1 = window.document.querySelector('#ver-menos1');
  let exibirSinopseOnePiece = window.document.getElementById('onePiece');
  let exibirSinopseSaintSeiya = window.document.getElementById('saintSeiya');
  let exibirSinopseShingeki = window.document.getElementById('shingeki');
  exibirSinopseOnePiece.style.display = 'flex';
  exibirSinopseSaintSeiya.style.display = 'flex';
  exibirSinopseShingeki.style.display = 'flex';
  verMenos1.style.display = 'flex';
  verMais1.style.display = 'none';
}
function sumirSinopse1(){
  let verMais1 = window.document.querySelector('#ver-mais1');
  let verMenos1 = window.document.querySelector('#ver-menos1');
  let naoExibirSinopseOnePiece = window.document.getElementById('onePiece');
  let naoExibirSinopseSaintSeiya = window.document.getElementById('saintSeiya');
  let naoExibirSinopseShingeki = window.document.getElementById('shingeki');
  naoExibirSinopseOnePiece.style.display = 'none';
  naoExibirSinopseSaintSeiya.style.display = 'none';
  naoExibirSinopseShingeki.style.display = 'none';
  verMais1.style.display = 'flex';
  verMenos1.style.display = 'none';
}
function exibiSinopse2(){
  let verMais2 = window.document.querySelector('#ver-mais2');
  let verMenos2 = window.document.querySelector('#ver-menos2');
  let exibirSinopseHimym = window.document.getElementById('himym');
  let exibirSinopseDark = window.document.getElementById('dark');
  let exibirSinopseBreaking = window.document.getElementById('breaking');
  exibirSinopseHimym.style.display = 'flex';
  exibirSinopseDark.style.display = 'flex';
  exibirSinopseBreaking.style.display = 'flex';
  verMenos2.style.display = 'flex';
  verMais2.style.display = 'none';
}
function sumirSinopse2(){
  let verMais2 = window.document.querySelector('#ver-mais2');
  let verMenos2 = window.document.querySelector('#ver-menos2');
  let naoExibirSinopseHimym = window.document.getElementById('himym');
  let naoExibirSinopseDark = window.document.getElementById('dark');
  let naoExibirSinopseBreaking = window.document.getElementById('breaking');
  naoExibirSinopseHimym.style.display = 'none';
  naoExibirSinopseDark.style.display = 'none';
  naoExibirSinopseBreaking.style.display = 'none';
  verMais2.style.display = 'flex';
  verMenos2.style.display = 'none';
}
function exibiSinopse3(){
  let verMais3 = window.document.querySelector('#ver-mais3');
  let verMenos3 = window.document.querySelector('#ver-menos3');
  let exibirSinopseNarnia = window.document.getElementById('narnia');
  let exibirSinopseCharlie = window.document.getElementById('charlie');
  let exibirSinopseCoracao = window.document.getElementById('coracao');
  exibirSinopseNarnia.style.display = 'flex';
  exibirSinopseCharlie.style.display = 'flex';
  exibirSinopseCoracao.style.display = 'flex';
  verMenos3.style.display = 'flex';
  verMais3.style.display = 'none';
}
function sumirSinopse3(){
  let verMais3 = window.document.querySelector('#ver-mais3');
  let verMenos3 = window.document.querySelector('#ver-menos3');
  let naoExibirSinopseNarnia = window.document.getElementById('narnia');
  let naoExibirSinopseCharlie = window.document.getElementById('charlie');
  let naoExibirSinopseCoracao = window.document.getElementById('coracao');
  naoExibirSinopseNarnia.style.display = 'none';
  naoExibirSinopseCharlie.style.display = 'none';
  naoExibirSinopseCoracao.style.display = 'none';
  verMais3.style.display = 'flex';
  verMenos3.style.display = 'none';
}


let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '90%'
email.style.width = '90%'

function validaNome(){
  let txtNome = document.querySelector('#txtNome')

  if (nome.value.length < 3){
    txtNome.innerHTML = 'Caracteres Inválidos'
    txtNome.style.color = 'red'
  }else{
    txtNome.innerHTML = 'Nome válido'
    txtNome.style.color = 'green'
    nomeOk = true
  }
}
function validaEmail(){
  let txtEmail = document.querySelector('#txtEmail')

  if (email.value.indexOf('@') == -1 ||  email.value.indexOf('.com') == -1){
    txtEmail.innerHTML = 'Caracteres Inválidos'
    txtEmail.style.color = 'red'
  }else{
    txtEmail.innerHTML = 'Email válido'
    txtEmail.style.color = 'green'
    emailOk = true
  }
}

function validaAssunto(){
  let txtAssunto = document.querySelector('#txtAssunto')

  if (assunto.value.length >=100){
    txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
    txtAssunto.style.color = 'red'
    txtAssunto.style.display = 'block'
  }else{
    txtAssunto.style.display = 'none'
    assuntoOk = true
  }
}

function enviar(){
  if (nomeOk == true && emailOk == true && assuntoOk ==true){
    alert('Formulário enviado com sucesso')
  }else{
    alert('Dados inválidos verifique os campos em vermelho do formulário')
  }
}
