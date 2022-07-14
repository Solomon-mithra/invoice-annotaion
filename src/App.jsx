import {useState, useEffect} from 'react'
import './App.css'
import Values from './pages/Values';
import Viewer from './pages/Viewer';

function App() {

  useEffect(()=>{
    const mousediv = document.getElementById('mouseDiv');
    mousediv.style.visibility = 'hidden';
  },[]);
    const [state , setState] = useState({
      name:"Solo",
      invoiceID:"",
      address:"",
      amount:""
    });

    const [tempText, setTempText] = useState();

    const handleMouseUp = (event) => {
      const mousediv = document.getElementById('mouseDiv');
        console.log(`Selected text: ${window.getSelection().toString()}`);
        if((window.getSelection().toString()).length>0){
          
          mousediv.style.visibility = 'visible';
          setTempText(window.getSelection().toString());
      }else{
        mousediv.style.visibility = 'hidden';
      }
        
    }

    const handleMouseDown = (event) => {
      const mousediv = document.getElementById('mouseDiv');
      var x = event.clientX;
        var y = event.clientY;
        var coords = "X coords: " + x + ", Y coords: " + y;
        if((window.getSelection().toString()).length<=0){
        console.log(coords);
        mousediv.style.left = x + -150 + 'px';
        mousediv.style.top = y + -25 + 'px';
        }
    }

    function handleNameClick(){
      setState({...state,name:tempText});
    }

    function handleinvoiceIDClick(){
      setState({...state,invoiceID:tempText});
    }

    function handleaddressClick(){
      setState({...state,address:tempText});
    }

    function handleamountClick(){
      setState({...state,amount:tempText});
    }

    async function handleValueChange(event){
      await setState({...state, [event.target.name]:event.target.value});
      console.log(state);
    }

    async function handleJSONValueChange(event){
      await setState({[state] :event.target.value});
      console.log(state);
    }


    return (
        <div>
            <div className='mainBox' onMouseUp={handleMouseUp} onMouseDown={handleMouseDown}>
      
                <Viewer ></Viewer>
                <Values data={state} handleValueChange={handleValueChange} handleJSONValueChange={handleJSONValueChange}></Values>
                <div id='mouseDiv'className='mainMouseDiv'>

                <div className='labelsP' onClick={handleNameClick}><p>Name</p></div>
                <div className='labelsP' onClick={handleinvoiceIDClick}><p >Invoice ID</p></div>
                <div className='labelsP' onClick={handleaddressClick}><p >Address</p></div>
                <div className='labelsP' onClick={handleamountClick}> <p >Amount</p></div>
                              
                </div>
            </div>

        </div>
    )
}

export default App
