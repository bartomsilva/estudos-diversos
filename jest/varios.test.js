const varios = require('./varios')

// test('teste A SEMPRE MAIOR ',()=>{
//    expect(varios.fsoma(10,5)).toBe('maior')
//    expect(varios.fsoma(10,8)).toBe('maior')
//    expect(varios.fsoma(10,55)).toBe('menor')
//    expect(varios.fsoma(10,15)).toBe('menor')
//    expect(varios.fsoma(10,5)).toBe('maior')
//    expect(varios.fsoma(10,6)).toBe('maior')
//    expect(varios.fsoma(210,5)).toBe('maior')
// })

// test('inverter string',()=>{
//    expect(varios.invertstring('Bart')).toEqual('traB')
// })
// test('tudo MAIUSCULO',()=>{
//    expect(varios.upstring('BaRt')).toEqual('BART') 
//    expect(varios.upstring('BaRt')).not.toEqual('BaRt') 
//    expect(varios.upstring('Curso de Node')).not.toMatch(/Node/)
//    expect(varios.upstring('Aplicando o Jest')).toMatch('JEST')
// })

test('Teste de Arrays', () => {
   expect(varios.marcas()).not.toBeNull()
   expect(varios.marcas()).toContain('Apple')   
   expect(varios.marcas()).not.toContain('Nokia')
   expect(varios.marcas()).toHaveLength(5)   
})

test('Teste de Objetos',()=> {
   expect(varios.utilizador('Rosa',27)).toHaveProperty('idade')
   expect(varios.utilizador('Rui',25)).toEqual({nome:'Rui',idade:25})
})
