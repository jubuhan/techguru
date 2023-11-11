import React from 'react'
import { db } from "../firebase_setup/firebase"
import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore'
import BlogList from './BLogList';


export default function Explore() {

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
  lists.sort((a, b) => b.createdAt - a.createdAt);
  


  return (
    <div className="home">
    

{lists&&<BlogList blogs={lists} title="Enjoy Millions Of Blogs At Your Fingertips!!!"/>}

  </div>
  )
}

