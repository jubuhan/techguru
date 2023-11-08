import React from 'react'
import Read_data from './Read_data'
import { Link } from 'react-router-dom'

export default function Create() {
  return (
    <div>
    <h2>Add your blog here</h2>
    <Read_data/>
    <button><Link to='explore'></Link>explore</button>
    <button>Your Collections</button>
    </div>
    
  )
}
