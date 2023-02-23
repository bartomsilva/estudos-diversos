function fsoma(a,b){
    return (a>b?'maior':'menor')
}

////////////////////////

function upstring(strings){
    return strings.toUpperCase()
}

function invertstring(strings){
    return strings.split('').reverse().join('')
}

function marcas() {
    return [
        'Samsung',
        'Apple',
        'LG',
        'Huawei',
        'Xiaomi']
}

function utilizador(nome,idade){
    const utilizador = {nome:nome, idade:idade}
    return utilizador 
}

exports.fsoma=fsoma
exports.upstring=upstring 
exports.invertstring=invertstring
exports.marcas=marcas
exports.utilizador=utilizador 






