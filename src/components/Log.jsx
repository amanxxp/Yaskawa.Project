import React from 'react'

const Log = ({Points}) => {
  console.log(Points);
  return (
    <div>
      <h2 className='text-center text-[40px]  font-semibold mt-2 mb-2 text-blue-800'>Control Points</h2>
      <div className='h-[1px] bg-black mb-6 '></div>
      <ul>
        {Points.map((point, index) => (
      
          <div className='m-4' key={index}>
            <div>X : {point.x.toFixed(2)}</div>
            <div>Y : {point.y.toFixed(2)}</div>
            <div>Z : {point.z.toFixed(2)}</div>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Log