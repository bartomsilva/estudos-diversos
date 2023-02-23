
export default function AppAula17_resultado(props){
    
    const media= props.soma/4

    return(
        <div>
            <p>Soma das Notas: {props.soma} </p>       
            <p>Média Aritimética: {media} </p>       
            <p>Legenda: (7++) Aprovado - (6++) Recuperação - (6--) Reprovado</p>
            
            <span>Aluno : </span>
            <span>{media>=7?'Aprovado':media<6?'reprovado':'em recuperação'}</span>     
        </div>
    )
}