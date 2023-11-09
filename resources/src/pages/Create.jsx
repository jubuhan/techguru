import React from 'react'
import Read_data from './Read_data'
import { Link } from 'react-router-dom'
import Explore from './Explore'

export default function Create() {
  return (
    <div className='create-container'>
    <h2>Create your blogs here</h2>
    <Read_data/>
    <div className="btn">
    <button>Explore</button>
    <button>Your Collections</button>
    </div>
  
    </div>
    
  )
  }
