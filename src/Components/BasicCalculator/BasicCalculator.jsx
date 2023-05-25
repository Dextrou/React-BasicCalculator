import React, { useState } from 'react'
import './BasicCalculator.css'

function BasicCalculator() {
   let [num1,setNum1] =useState("");
   let [num2,setNum2] = useState("");
   let [finalresult, setFinalResult]=useState('');
    function convert(){
        let num1bool = num1.includes('.');
        let num2bool = num2.includes('.');
        num1=num1bool ===true?parseFloat(num1):parseInt(num1);
        num2=num2bool ===true?parseFloat(num2):parseInt(num2);
    }
    function check(){
     if(num1.length ===0 || num2.length ===0){
        return Error;
    }
    }
    function add(){
     let result =check();
     if(result === Error){
        setFinalResult("Failure: Error: you can't specify both input field");
       
     }
     else{
        if(typeof(num1) == 'number'){
        setFinalResult("SUCCESS OUTPUT: "+(num1+num2));
       
        }
        else{
        convert();
        setFinalResult("SUCCESS OUTPUT: "+(num1+num2));
        
     }
    }
    
    }
    function sub(){
        let result =check();
        if(result === Error){
           setFinalResult("Failure: Error: you can't specify both input field");
        }
        else{
           if(typeof(num1) == 'number'){
           setFinalResult("SUCCESS OUTPUT: "+(num1-num2));

           }
           else{
           convert();
           setFinalResult("SUCCESS OUTPUT: "+(num1-num2));
        }
       }
    }
    function mul(){
        let result =check();
        if(result === Error){
           setFinalResult("Failure: Error: you can't specify both input field");
        }
        else{
           if(typeof(num1) == 'number'){
           setFinalResult("SUCCESS OUTPUT: "+(num1*num2));
           }
           else{
           convert();
           setFinalResult("SUCCESS OUTPUT: "+(num1*num2));
        }
       }
    }
    function divide(){
        let result =check();
        if(result === Error){
           setFinalResult("Failure: Error: you can't specify both input field");
    
        }
        else{
           if(typeof(num1) == 'number'){
           setFinalResult("SUCCESS OUTPUT: "+(num1/num2));
          
           }
           else{
           convert();
           setFinalResult("SUCCESS OUTPUT: "+(num1/num2));
           
        }
       }
    }
    return (
     <div className="Basic">
        <div className="Numbers">
           <input type="text" placeholder='Enter Num1' value={num1} onChange={(e)=>setNum1(e.target.value)}/><br />
           <input type="text" placeholder='Enter Num2' value={num2} onChange={(e)=>setNum2(e.target.value)}/><br />
        </div>
        <div className="buttons">
            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={mul}>*</button>
            <button onClick={divide}>/</button>
        </div>
        <div className="finalresponse">
           <p>{finalresult}</p>
        </div>
     </div>
    )
}

export default BasicCalculator
