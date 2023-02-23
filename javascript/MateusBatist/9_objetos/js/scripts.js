var obj = {
  nome: [],
  idade: [],
  profissao: [],
  estaTrabalhando: [],
  
};

console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

obj.nome.push('barto');
obj.idade.push(55);
obj.profissao.push('dev');
obj.estaTrabalhando.push(false);

obj.nome.push('sandra');
obj.idade.push(48);
obj.profissao.push('professora');
obj.estaTrabalhando.push(true);

obj.nome.push('pedro');
obj.idade.push(13);
obj.profissao.push('estudante');
obj.estaTrabalhando.push(false);

obj.nome.push('francy');
obj.idade.push(24);
obj.profissao.push('atendente');
obj.estaTrabalhando.push(true);


// console.log("O meu nome é " + obj.nome);

// obj.nome = "Pedro";

// console.log(obj.nome);

// console.log(obj);

// obj.graduacao = true;
// obj.mae ="Sandra";
// obj.pai ="Bart";
// console.log(obj);

for (let i=0; i<obj.nome.length;i++){
  console.log(obj.nome[i]);
  console.log(obj.idade[i]);
  console.log(obj.profissao[i]);
  console.log(obj.estaTrabalhando[i]);  
}
