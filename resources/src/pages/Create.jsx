import React from 'react'
import Read_data from './Read_data'

import Explore from './Explore'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Create() {
  const navigate=useNavigate()

  return(
    <div className='create-container'>
    <h2>Create your blogs here</h2>
    <Read_data/>
    <div className="btn">
    <button onClick={()=>{navigate('explore')}}>Explore</button>
    <button>Your Collections</button>
    </div>
  
    </div>
    
  )
  }
