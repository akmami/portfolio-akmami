import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import Tabs from './components/tabs';


function App() {
  
  //creating IP state
  const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    console.log("IP request is initiated.")
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
  }
  
  useEffect( () => {
    getData()
  }, [])

  return (
    <div className="App">
      
      <header className="App-header">
        <h2 className="title" >Akmuhammet Ashyralyyev</h2>
        <Tabs />
      </header>
      
    </div>
  );
}

export default App;
