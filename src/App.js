import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import firebase, {db} from './firebase/config'
import View from './View'

function App() {

  const location = useLocation();
  const params = new URLSearchParams(location.search)

  useEffect(()=>{
    if(params.get("fbclid")){
      const fbLink = "https://www.facebook.com/profile.php?"+params.get("fbclid")
      db.collection('People').add({
      fbLink,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    }
  },[])
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
