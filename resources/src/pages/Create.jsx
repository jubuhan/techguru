import React from 'react'
import Read_data from './Read_data'
import { Link } from 'react-router-dom'
import Explore from './Explore'

export default function Create() {
  return (
<<<<<<< HEAD
    <div className='create-container'>
    <h2>Create your blogs here</h2>
    <Read_data/>
    <div className="btn">
    <button>Explore</button>
=======
    <div>
    <h2>Create your blogs here</h2>
    <Read_data/>
    <button><Link to='explore'></Link>Explore</button>
>>>>>>> 9ca75a5f452870a7142b49934177d5b0433c8345
    <button>Your Collections</button>
    </div>
  
    </div>
    
  )
  }
