
export default function HeaderProps(props){
    return (
        <header>
            <p>Nome do Canal: {props.canal()}</p>
            <p>Mensagem: {props.mensagem()}</p>
            <p>O Curso CFB Cursos é Nota: {props.nota}</p>
            <img src={props.foto}/>              
        </header>
    )
}