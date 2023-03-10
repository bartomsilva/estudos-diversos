// função para converter primeiras letras de nomes 
// para maiusculas. by Bart Silva- 12/2022
// 
const uppercase = (name) => {
  // converte tudo para miniusculo
  name = name.toLowerCase().trim()
  // word, monta as palavras separadamente
  // exemplo: carlos  drummond    de   andrade
  let word = ""
  // novo nome convertido (será o retorno)
  let newName = ""

  // sub-função que verifica palavras que não 
  // dever ter primeira letra maiuscula
  const wordOk = (word) => {
    const blackList = ['e', "da", "das", "de", "dos", "do"]
    return !(blackList.find(item => item === word))
  }

  // percorre letra por letra montando as palavras uma a uma
  for (let count = 0; count < name.length; count++) {
    // se o caracter não for espaço vazio
    // adiciona o caracter a palavra
    if (name[count] != " ") word += name[count]
    // se o contador chegou ao final ou encontrou um
    // espaço vazio, verifica se a palavra pode ser 
    // convertida ou não
    if ((count == name.length - 1) || (name[count] == " ")) {
      // verifica se pode converter (não consta na blacklist)
      if (wordOk(word)) {
        newName += word[0].toUpperCase()
        newName += word.substring(1) + " "
      } else {
        // entra aqui no caso a palavra não precisar 
        // de converssão ex. de, da, das e etc...
        newName += word + " "
      }
      // reseta a palavras
      word = ""
    }
  }
  // retorna o novo nome convertido.
  return newName.trim()
}

// testes
console.log(uppercase("juliana moreira de bragança e bourbon"))
console.log(uppercase("maria josé costa e souza"))
console.log(uppercase("pablo ricardo das neves e silva"))



