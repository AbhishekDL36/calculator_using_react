
function Multiply({getVal}) {
    return (
      <div className="App">
     <p className="border-black border-[1px] border-solid  px-[70px] py-[20px]" onClick={()=>getVal('*')}>*</p>
     
      </div>
    );
  }
  
  export default Multiply;