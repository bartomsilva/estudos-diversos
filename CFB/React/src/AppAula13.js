import {useId} from 'react'

export default function AppAula12(){

    const carros=['HRV','Golf','Cruzer','Argo','BMW','Camaro']

    const listaCarros=carros.map(
        // aqui posso retornar o que eu precisar
        // no caso estou retornando LI's
        //(carro,indice)=><li key={indice}>{carro}</li>
        (carro,indice)=><li key={useId()}>{carro}</li>
    )
    
    const vencedores = [
        {
            nome : "Equipe Super",
            pais : "Brasil"
        },
        {
            nome : "Time Maximo",
            pais : "EUA"
        },
        {
            nome : "Mega Grupo",
            pais : "Canadá"
        }
     ];
     
     const podioPorPais = vencedores.map(function(item, indice){
        return <span>{item.pais}  </span>
     })
     // acima e abaixo as duas formas de fazer
     const podio = vencedores.map(
        (e,indice)=><p>{e.pais}</p>
     )
   
    return(
        <>
            <h1>CFB Cursos</h1>
            <h3>Estudo Método Map</h3>
            {carros} {/* saida HRVGolfCruzerArgoBMWCamaro */}
            <ol>{listaCarros}</ol>
            {podioPorPais}
            {podio}        
        </>        
    )
}