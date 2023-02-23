
import React from 'react'

export default class AppAula21_info extends  React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
    /*
        getDay();	Retorna o dia da semana, domingo=0, segunda=1	 
        getDate();	Retorna o dia do mês	 
        getMonth();	Retorna o mês, janeiro=0, fevereiro=1	 
        getFullYear();	Retorna o ano com 4 dígitos, ex: 2015	 
        getHours();	Retorna a hora	 
        getMinutes();	Retorna os minutos	 
        getSeconds();	Retorna os segundos	 
        toDateString();	Retorna a data por estêncil, padrão EUA	 
        toDateString();	Retorna a data no formato 16/12/2015	 
        toLocaleString();	Retorna a data e a hora 16/12/2015 23:13:00	 
    */
        var data=new Date();
        var d1,d2, d3, d4, d5, d6, d7, d8, d9, d10

        const mesExtensso=['','Janeiro','Fevereiro','Março','Abril','Maio','Junho',
                                'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

        const diaSemanaExtensso=['','Domingo','Segunda','Terça','Quarta',
                                       'Quinta','Sexta','Sábado','Domingo']

        return(
            <>
                <h4>{this.props.titulo}</h4>
                
                <p>d1 getDay() - N dia da semana = {d1=data.getDay()+1}</p>
                <p>d2 getDate() - N dia do mês= {d2=data.getDate()}</p>
                <p>d3 getMouth() - N o mês = {d3=data.getMonth()+1}</p>
                <p>d4 getFullYear() - N o ano = {d4=data.getFullYear()}</p>
                <p>d5 getHours() - N a hora = {d5=data.getHours()}</p>
                <p>d6 getMinutes() - N os minutos = {d6=data.getMinutes()}</p>
                <p>d7 getSeconds() - N os segundos = {d7=data.getSeconds()}</p>
                <p>d8 toDateString() - S data extenso USA = {d8=data.toDateString()}</p>
                <p>d9 toLocaleString() - S data mm/dd/aa = {d9=data.toLocaleDateString() }</p>
                <p>d10 toLocaleDateString - S data mm/dd/aa = {d10=data.toLocaleDateString()}</p>

                <p>Mes atual: {mesExtensso[d3]}</p>
                <p>Dia da semana: {diaSemanaExtensso[d1]}</p>

            </>
        )
    }

}

