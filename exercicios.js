// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt('Informe a altura: ')
  const largura = prompt('Informe a largura: ')
  console.log(altura*largura)
  
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Informe o ano atual: ')
  const anoNasc = prompt('Informe seu ano de nascimento: ')
  console.log(anoAtual-anoNasc)
  
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Informe seu nome: ')
  const idade = prompt('Informe sua idade: ')
  const email = prompt('Informe seu email: ')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Primeira cor favorita: ")
  const cor2 = prompt("Segunda cor favorita: ")
  const cor3 = prompt("Terceira cor favorita: ")
  const cores = [cor1, cor2, cor3]
  console.log(cores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimo = array[array.length - 1]
  return ultimo
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const novaString1 = string1.toUpperCase()
  const novaString2 = string2.toUpperCase()
  return novaString1 === novaString2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  // const anoAtual = prompt("Informe o ano atual: ")
  // const anoDeNascimento = prompt("Informe o ano de nascimento: ")
  // const anoEmissaoRG = prompt("Informe o ano atual: ")
  // const idade = anoAtual - anoDeNascimento
  // const renovarEm5Anos = idade <= 20
  // const renovarEm10Anos = idade >= 20 && idade <=50
  // const renovarEm15Anos = idade >= 50
  // console.log();
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const checaAno = (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 != 0)
  return checaAno
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}