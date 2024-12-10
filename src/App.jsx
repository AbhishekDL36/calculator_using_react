import { useEffect, useState } from "react";
import Digits from "./Digits";

function App() {

  const [values,setValues] = useState("")
  const [operator,setOperator] = useState({
    bool:false,
    value:""
  })
  const [clicked,setClicked]= useState(false)
  const [index,setIndex]= useState(0)
  const [finalans,setFinalans] = useState(0)
  const [ans,setAns]= useState({
    a:0,
    b:0
  })
  function getVal(val){
if((val==='+'||val==='-'||val==='*'||val==='%' ||val==='='||val==='.') && values===''){
alert('values not added')
}

else if((val==='+'||val==='-'||val==='*'||val==='%' ) && values!=''){
setOperator({
value:val,
  bool:true
})
setValues(String(values)+String(val))
setIndex(index+1)
setAns({...ans,
  a:Number(values)
})

}


else if(val==='=' && !operator.bool){
  alert('select any operator')
}
else{

  if((values[index-1]==='+'|| values[index-1]==='-'||values[index-1]==='%'||values[index-1]==="*")&& val==="="){
alert('select the other value')
  }
  else{
    setValues(String(values)+String(val))
    setIndex(index+1)
    if(val==="="){
      let ind=-1;
      let num=0;
      for(let i=0; i<values.length-1;i++){
        if(values[i]==="+"|| values[i]==="-"||values[i]==="*"||values[i]==="%"){
          ind=i;
       }
        num= values.slice(ind+1)
      }
      setAns({
        ...ans, 
        b:Number(num)
      })
setClicked(true)
    }
  }

  if(val==="cross"){
    setFinalans(0)
    setValues("")
    setAns({
      a:0,
      b:0
    })
  }
 
}


    
    console.log(values)
  }
  useEffect(()=>{
    console.log(values,ans,index,finalans)
if(clicked){
  let res;
  switch(operator.value){
    case '+':   res= ans.a+ans.b
   
    break
    case '-' :res=ans.a-ans.b
    break
    case '*': res= ans.a*ans.b
    break
    case '%'  : res=(ans.a/ans.b).toFixed(3)
   

  }

  setFinalans(res); // Update finalans
  setValues(res);
}

setClicked(false)
    


 
  },[values,finalans,ans.a,ans.b,clicked])
  return (
    <div className="h-[100vh] bg-gray-100 ">
     
   <p className="bg-gray-400 text-[40px] text-white py-[20px] pl-[37%]">CALCULATOR APP</p>
   <input type="text" className="border-black border-solid border-[1px] absolute w-[500px] left-[410px] h-[40px] top-[120px] pl-[20px]"  readOnly value={values}/>
   <p className="absolute top-[128px] left-[850px]">{finalans}</p>
   <div className="mt-[80px] ml-[340px] text-[30px] text-gray-800">
   
   <Digits getVal={getVal} />

   </div>

    </div>
  );
}

export default App;
