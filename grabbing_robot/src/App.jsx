import { useState } from 'react'
import './App.css'

function App() {
  const [crane, setcrane] = useState(false)
  const [axis1, setaxis1] = useState(90)
  const [axis2, setaxis2] = useState(90)
  const [axis3, setaxis3] = useState(90)
  const [axis4, setaxis4] = useState(90)
  const [axis5, setaxis5] = useState(90)
function mode(){
  if(crane){
    setcrane(false);

  }else{
    setcrane(true)
  }
}
  return (
    <>
    {crane?"":<><div className="container-button1">
  <div className="hover bt-1-1"></div>
  <div className="hover bt-1-2"></div>
  <div className="hover bt-1-3"></div>
  <div className="hover bt-1-4"></div>
  <div className="hover bt-1-5"></div>
  <div className="hover bt-1-6"></div>
  <button id='farward'></button>
</div>
<div className="container-button2">
  <div className="hover bt-2-1"></div>
  <div className="hover bt-2-2"></div>
  <div className="hover bt-2-3"></div>
  <div className="hover bt-2-4"></div>
  <div className="hover bt-2-5"></div>
  <div className="hover bt-2-6"></div>
  <button id='backward'></button>
</div>
        

 <div className="container-button3">
  <div className="hover bt-3-1"></div>
  <div className="hover bt-3-2"></div>
  <div className="hover bt-3-3"></div>
  <div className="hover bt-3-4"></div>
  <div className="hover bt-3-5"></div>
  <div className="hover bt-3-6"></div>
  <button id='left'></button>
</div>
    

<div className="container-button4">
  <div className="hover bt-4-1"></div>
  <div className="hover bt-4-2"></div>
  <div className="hover bt-4-3"></div>
  <div className="hover bt-4-4"></div>
  <div className="hover bt-4-5"></div>
  <div className="hover bt-4-6"></div>
  <button id='right'></button>
</div> </>}

<button type="button" className={crane?"btncha":"btn" } onClick={mode}>
  <strong>{crane?"Move":"Grabber"}</strong>
  
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button>
{crane?<>
  <label id="l1"for="axis1">Grabber:{axis1!=null?<div id='val1'>{axis1}</div>:""}</label><br/>
  <input id='axis1' type='range'value={axis1} max="155" onChange={(e)=>setaxis1(e.target.value)}></input><br/>
  <label id="l2" for="axis2">axis3: {axis1!=null?<div id='val2'>{axis2}</div>:""}</label><br/>
  <input id='axis2' type='range' value={axis2} max="155" onChange={(e)=>setaxis2(e.target.value)}></input><br/>
  <label id="l3" for="axis3">axis2:{axis1!=null?<div id='val3'>{axis3}</div>:""}</label> <br/>
  <input id='axis3' type='range' value={axis3} max="155" onChange={(e)=>setaxis3(e.target.value)}></input><br/>
  <label id="l4" for="axis4">axis1:{axis1!=null?<div id='val4'>{axis4}</div>:""}</label> <br/>
  <input id='axis4' type='range' value={axis4} max="155" onChange={(e)=>setaxis4(e.target.value)}></input><br/>
  <label id="l5" for="axis5">Base:{axis1!=null?<div id='val5'>{axis5}</div>:""}</label> <br/>
  <input id='axis5' type='range' value={axis5} max="155" onChange={(e)=>setaxis5(e.target.value)}></input><br/>
  </>:""}
    </>
  )
}

export default App
