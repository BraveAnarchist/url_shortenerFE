import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

function App() {
  const [count, setCount] = useState("")
  const [val,setValue]=useState(null);
  async function submitHandler(e){
    e.preventDefault();
      try{
        console.log(count)
      const rep = await axios.post("https://url-shortener-1-fpyp.onrender.com/shorten",{"longUrl":count});
      setValue(rep.data);
      console.log(rep.data);
      }
      catch(err){
        console.log(err);
      }
  }


  return (
    <>
      <form >
      <input type='text' placeholder='enter url to be shorten' value={count} onChange={(e)=>setCount(e.target.value)} />
      
      <button onClick={submitHandler} style={{marginTop:"1vh"}}>Short</button>
      </form>
      <br/>
      <br/>
      {val && <div style={{display:"flex",gap:"2vw"}}><h2>Short URL: </h2> <a href={val.shortUrl}>{val.shortUrl}</a></div>}
      
       
    </>
  )
}

export default App
