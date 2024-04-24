import Header from "./Componenmt/Header";
import Result from "./Componenmt/Result";
import { useState } from "react";
import Userinput from "./Componenmt/Userinput";

function App() {
  const[userInput,setuserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
}
);
const inpuIsValid= userInput.duration >=1;
function handleChange(inputIdentifier, newValue){
  setuserInput(prevUserInput=>{
     return{
      ...prevUserInput,
      [inputIdentifier]:newValue
     };

  });
}
  return (
<>
    <Header/>
    {/* اذا استعديت الوظيفة لا تضيف الاقواس */}
   <Userinput userInput={userInput} onchange={handleChange}/>
   {!inpuIsValid &&<p className="center">please enter duration greater</p>}
    {inpuIsValid && < Result input={userInput}/>} 
    </>
  )
}

export default App
