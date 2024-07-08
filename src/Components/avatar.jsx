import React from 'react'
import DP from "../assets/dp.jpg"
import Stats from './stats'
function Avatar() {
  return (
    <div className='flex lg:block'>
      <div className="avatar">
  <div className="w-64 border-4 border-yellow-400 rounded-full">
    <img src={DP} />
  </div>
</div>
<div><Stats/></div>
    </div>
  )
}

export default Avatar
