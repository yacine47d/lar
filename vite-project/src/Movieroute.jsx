import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default function MovieRoute () {
    const {id}= useParams() ; 
    const location = useLocation() ; 
  return (
    <div >
        <img alt="dd" src={location.state.Trailer} />
        <p>{location.state.description}</p>
        
    </div>
  )
}