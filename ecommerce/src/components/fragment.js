import { collection, query, orderBy, onSnapshot, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { db } from "../firebase"

export function Fragment() {
  const [prod, setProd] = useState([])
  async function loooool() {
    const q = query(collection(db, "carrinho"));
    const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
    // });
    onSnapshot(q, (queryS) => {
      setProd(queryS.docs.map(doc =>
        ({ data: doc.data() })))
    })
  }

  useEffect(() => {
    loooool()
  }, [])

  const renderItem=(el,index)=>{
    return <p key={index} >{el.data.prod} R$ {el.data.price}</p>
  }
  return (
    <div>

    {prod.map((item,index) => renderItem(item,index)) }

    </div>
  )


}