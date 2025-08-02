import React  from "react";

function Buttons({Bgchange}) {
  return (
    <div className='fixed flex-wrap justify-center bottom-12'>
    <div className='fixed flex-wrap'>
      <button type="button"  onClick={() => Bgchange('red')}style={{background:'red'}} >Red</button>
      <button type="button" onClick={ () => Bgchange('yellow')}  style={{background:'yellow'}}>yellow</button>
      <button type="button" onClick={ () => Bgchange('olive')} style={{background:'olive'}}>olive</button>
      <button type="button"  onClick={ () => Bgchange('green')} style={{background:'green'}}>green</button>
    </div>
  </div>
  )
}

export default Buttons