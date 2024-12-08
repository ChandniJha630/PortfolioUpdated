import React from 'react'
import DP from "../assets/profile.jpg"
import Stats from './stats'
import '../styles/avatar.css'

function Avatar() {
  return (
    <div className='flex profile'>
    <div className="avatar">
    <div className="w-64 lg:w-32 border-4 lg:border border-yellow-400 rounded-full">
    <img src={DP} />
    </div>
</div>
<div><Stats/></div>
    </div>
  )
}

export default Avatar
