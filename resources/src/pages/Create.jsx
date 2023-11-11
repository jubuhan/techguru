import React from 'react'
import Read_data from './Read_data'
import { Link } from 'react-router-dom'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from "../firebase_setup/firebase"

import { useState,useEffect } from 'react'
import Collection from './Collection'

export default function Create() {


    //GETTINGS LISTS
    const [lists, setLists] = useState([]) //list of items
    useEffect(() => {
      //orderBy, returns an ordered array according to how they are the items are created
      const q = query(collection(db, "blogs"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setLists(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        //setInput("")
      });
      return () => unsubscribe()
    }, [])
  
    
  

  return(
    <div className='create-container'>
    <h2>Create your blogs here</h2>
    <Read_data/>
    <div className="btn">
    {lists&&<Collection blogs={lists}/>}
    <button ><Link to="/explore">Explore</Link></button>
    
    </div>
  
    </div>
    
  )
  }
