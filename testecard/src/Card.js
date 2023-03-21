import { useState } from "react";
import styled from "styled-components";
import logoHiper from './img/hiper.png'
import logoChip from './img/chip.png'

const CardCredit = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    justify-content: space-around;
    align-items: center;
    ;
    width: 350px;
    height: fit-content;
    min-height: 230px;
    background-color: ${({ color }) => color ? color : "#DCDCDC"};
    border-radius: 10px;    
    font-size: 13px;
    img{
        width: 80px;
    }
    input{
        border: none;
        outline: none;
        height: 25px;
    }
`
const CardCreditContainerImage = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

`
const CardCreditName = styled.div`
    width: 100%;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
       

`

// const IdentificationCard = styled.div`
//     background-color: blue;

// `
// const OtherInforCard = styled.div`
//     width: 100px;
//     display: flex;
//     flex-direction: column;    
//     img{
//         align-self: flex-end;
//         padding-right: 15px;
//     }

// `

const ValidateCard = styled.div`
    width: 90px;
    border: 1px solid black;

`
const ValidCardMonthYear = styled.div`
    width: 100%;
    border-bottom: 1px solid red;
    font-size: 6px;
    text-align: right;
    margin-right: 5px;

`
const ValidCardDate = styled.div`
    display: flex;
`
const ValidCardDateText = styled.div`
    width: 25%;
    text-align: center;
    p{
        font-size: 10px;
        margin: 0;
        padding: 0;
    }
`

const ValidCardDateDate = styled.div`
    background-color: orange;
    flex: 1 1 100%;

`

export default function CardCreditContainer(obj) {

    const [card, setCard] = useState({
        numberCard: "0000 0000 0000 0000 0000",
        nameCard: "BART SILVA",
        validCard: "03/2030",
        cvcCard: "111"
    })
    return (
        <CardCredit>
            <CardCreditContainerImage>
                <div>
                    <img src={logoChip} alt="" />
                </div>
                <div>
                    <img src={logoHiper} alt="" />
                </div>
            </CardCreditContainerImage>

            <div>
                {/* <p>{card.numberCard}</p> */}
                <input type="text" placeholder="**** **** **** ****" />

            </div>

            <CardCreditName>
                {/* <p>{card.nameCard}</p> */}
                <input type="text" placeholder="Nome no cartão" />

                <ValidateCard>
                    <ValidCardMonthYear>
                        MONTH/YEAR
                    </ValidCardMonthYear>
                    <ValidCardDate>
                        <ValidCardDateText>
                            <p>valid</p>
                            <p>thru</p>
                        </ValidCardDateText>
                        <ValidCardDateDate>

                        </ValidCardDateDate>
                    </ValidCardDate>
                </ValidateCard>
            </CardCreditName>


        </CardCredit>
    )
}
/*                   
  BILHOU                      bandeira
0000 0000 0000 0000 0000 

nome nome nome                    MONTH/YEAR
                           valid
                           thru
                                    cvc
*/

