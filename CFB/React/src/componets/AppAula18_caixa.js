
export default function AppAula18_caixa(props){

    return(
        <>
            <h1>Contenção</h1>
            <p>{props.site}</p>
            <p>props.children abaixo</p>
            {/* {props.children[0]}
            {props.children[1]} */}
            {props.children}  {/*chamar todos*/}             
        </>
    )
}