import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const EcommerceContext = createContext()

export default function EcommerceProvider({ children }) {
  const [user, setUser] = useState({ userId: "", userEmail: "" })
  const [loading, setLoading] = useState(false)
  const auth = getAuth();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const objUser = { userId: user.uid, userEmail: user.email }
        setUser(objUser)
      }
    });
  },[])
  const context = {
    loading,
    setLoading,
    auth, 
    userId: user.userId,
    userEmail: user.userEmail
    

  }

  return (
    <EcommerceContext.Provider value={context}>
      {children}
    </EcommerceContext.Provider>
  )
}