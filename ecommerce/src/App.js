import { useEffect }  from 'react'
import { db } from './firebase'
import  Router from './components/router/Router'
import userConected from './components/hooks/UserStatus';

function App() {

  return (
    <>
      <Router/>           
     </>
  );
}

export default App;
