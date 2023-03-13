import styled from "styled-components";

export const ContainerLogin = styled.div`
    width: 340px;
    height: 400px;
    background-color: #ffb703;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    border-radius: 2%;
    display: flex;
    justify-content: space-around  ;
    align-items: center;
    flex-direction: column;

    form{
        margin-top: 20px;
        width: 88%;
        height: 80%;
        border: 2px solid #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;

        
        button{
            margin-top: 10px;
            margin-bottom: 10px;
            height: 40px;
            padding: 10px;
            border-radius: 0.25rem;
            border: none;
            cursor: pointer;
            font-weight: 600;
            :hover{
                background-color: #a2d2ff;
                color: #fff;
            }
          }
          label{
              margin-top: 10px;
              margin-bottom: 10px;
              font-weight: 600;
            }
        }          
 
`;

export const Input = styled.input`
    cursor: pointer;
    width: 88%;
    height: 30px;
    padding-inline: 10px;
    text-align: center;
    border-radius: 20px;
    border: none;
    outline: none;
    background-color: #fffcf2;
    :not(:placeholder-shown) {
        background-color: #d0f4de;
    }  
    :-webkit-autofill{
        background-color: #d0f4de ;
    }     
    
  `;

export const MessageError = styled.div`
    
    color: ${({ status }) => status === "error" ? "#ef233c" : "#83c5be"}
    
`