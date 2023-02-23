import React, {useState} from 'react'
import IMCtabela from './componets/IMCtabela'
import IMCinformarDados from './componets/IMCinformarDados'
import IMCcalcular from './componets/IMCcalcular'
import IMCexibir from './componets/IMCexibir'

export default function AppAula31() {

    const [peso,setPeso]=useState(0)
    const [altura,setAltura]=useState(0)
    const [imc,setImc]=useState(0)
    
    return(
      <>
          <IMCinformarDados peso={peso} setPeso={setPeso} altura={altura} setAltura={setAltura} />  
          <IMCcalcular peso={peso} altura={altura} setImc={setImc} />
          <IMCexibir imc={imc} />   
          <IMCtabela/>
      </>
    )
}