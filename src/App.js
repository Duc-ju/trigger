import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import firebase, {db} from './firebase/config'

function App() {

  const location = useLocation();
  const params = new URLSearchParams(location.search)
  const fbLink = "https://www.facebook.com/profile.php?"+params.get("fbclid")

  useEffect(()=>{
    if(params.get("fbclid")){
      db.collection('People').add({
      fbLink,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    }
  },[])
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div style={{marginTop:60}}>Đang cập nhật thông tin, vui lòng truy cập lại sau</div>} />
      </Routes>
    </div>
  );
}

export default App;
