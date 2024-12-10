import Divide from "./Divide";
import Multiply from "./Multiply";
import Subtract from "./Subtract";
import Sum from "./Sum";

function Digits({getVal}) {
    return (
        <>
       
      <div className="grid grid-cols-4 w-[60%] h-[60%] bg-gray-200">
<p className="border-black border-[1px] border-solid px-[70px] py-[20px]" onClick={()=>getVal(1)}>1</p>
<p className="border-black border-[1px] border-solid px-[70px] py-[20px]" onClick={()=>getVal(2)}>2</p>
<p className="border-black border-[1px] border-solid px-[70px] py-[20px]" onClick={()=>getVal(3)}>3</p>
<Sum getVal={getVal} />
<p className="border-black border-[1px] border-solid px-[70px] py-[20px]" onClick={()=>getVal(4)}>4</p>
<p className="border-black border-[1px] border-solid px-[70px] py-[20px]" onClick={()=>getVal(5)}>5</p>
<p className="border-black border-[1px] border-solid  px-[70px] py-[20px]" onClick={()=>getVal(6)}>6</p>
<Subtract getVal={getVal}  />
<p className="border-black border-[1px] border-solid  px-[70px] py-[20px]" onClick={()=>getVal(7)}>7</p>
<p className="border-black border-[1px] border-solid  px-[70px] py-[20px]" onClick={()=>getVal(8)}>8</p>
<p className="border-black border-[1px] border-solid  px-[70px] py-[20px]" onClick={()=>getVal(9)}>9</p>
<Multiply getVal={getVal} />
<p className="border-black border-[1px] border-solid  px-[70px] py-[20px]" onClick={()=>getVal('.')}>.</p>
<p className="border-black border-[1px] border-solid  px-[70px] py-[20px]" onClick={()=>getVal(0)}>0</p>

<p className="border-black border-[1px] border-solid  px-[70px] py-[20px]" onClick={()=>getVal('=')}>=</p>
<Divide getVal={getVal} />


      </div>
      <button className=" border-black border-[1px] border-solid  mt-[50px] ml-[210px] px-[100px] py-[20px] bg-gray-300" onClick={()=>getVal("cross")}>☒</button>
      </>
    );
  }
  
  export default Digits;