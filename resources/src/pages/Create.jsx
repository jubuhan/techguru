import React from 'react'
import Read_data from './Read_data'
import { Link } from 'react-router-dom'

export default function Create() {
  return (
    <div>
    <h2>Create your blogs here</h2>
    <Read_data/>
    <button><Link to='explore'></Link>Explore</button>
    <button>Your Collections</button>
    </div>
    
  )
  }
