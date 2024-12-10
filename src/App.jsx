import { useEffect, useState } from "react";
import Digits from "./Digits";

function App() {

  const [values,setValues] = useState("")
  function getVal(val){
if((val==='+'||val==='-'||val==='*'||val==='%' ||val==='='||val==='.') && values===''){

}

// if(){

// }
else{
  setValues(String(values)+String(val))
}
    
    console.log(values)
  }
  useEffect(()=>{
    console.log(values)
  },[values])
  return (
    <div className="h-[100vh] bg-gray-100 ">
   <p className="bg-gray-400 text-[40px] text-white py-[20px] pl-[37%]">CALCULATOR APP</p>
   <input type="text" className="border-black border-solid border-[1px] absolute w-[500px] left-[410px] h-[40px] top-[120px] pl-[20px]"  readonly value={values}/>
   <div className="mt-[80px] ml-[340px] text-[30px] text-gray-800">
   
   <Digits getVal={getVal}/>

   </div>

    </div>
  );
}

export default App;
