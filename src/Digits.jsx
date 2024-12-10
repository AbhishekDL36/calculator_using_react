import Divide from "./Divide";
import Multiply from "./Multiply";
import Subtract from "./Subtract";
import Sum from "./Sum";

function Digits() {
    return (
        <>
       
      <div className="grid grid-cols-4 w-[60%] h-[60%] bg-gray-200">
<p className="border-black border-[1px] border-solid px-[70px] py-[20px]">1</p>
<p className="border-black border-[1px] border-solid px-[70px] py-[20px]">2</p>
<p className="border-black border-[1px] border-solid px-[70px] py-[20px]">3</p>
<Sum />
<p className="border-black border-[1px] border-solid px-[70px] py-[20px]">4</p>
<p className="border-black border-[1px] border-solid px-[70px] py-[20px]">5</p>
<p className="border-black border-[1px] border-solid  px-[70px] py-[20px]">6</p>
<Subtract className="border-black border-[1px] border-solid"/>
<p className="border-black border-[1px] border-solid  px-[70px] py-[20px]">7</p>
<p className="border-black border-[1px] border-solid  px-[70px] py-[20px]">8</p>
<p className="border-black border-[1px] border-solid  px-[70px] py-[20px]">9</p>
<Multiply className="border-black border-[1px] border-solid"/>
<p className="border-black border-[1px] border-solid  px-[70px] py-[20px]">.</p>
<p className="border-black border-[1px] border-solid  px-[70px] py-[20px]">0</p>

<p className="border-black border-[1px] border-solid  px-[70px] py-[20px]">=</p>
<Divide className="border-black border-[1px] border-solid"/>


      </div>
      <button className=" border-black border-[1px] border-solid  mt-[50px] ml-[270px] px-[100px] py-[20px] bg-gray-300">☒</button>
      </>
    );
  }
  
  export default Digits;