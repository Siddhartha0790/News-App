import React from 'react'
import Loading from './loading-7528_256.gif'

export default function Spinner() {
  return (
    <div>
       <img className ="position-relative" style = {{width : '25px', marginBottom :'10px' , marginTop : '10px' }} src= {Loading}></img>
    </div>
  )
}
