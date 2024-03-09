import React from 'react'
import { useEffect, useRef } from 'react'
import './EventListner.css'
function UseRf() {

    const ref=useRef()
  useEffect(()=>{
    const cursor=ref.current
    // console.log(cursor)
    document.addEventListener('mouseover',(e)=>{
        // console.log('event is calling');
          cursor.style.left=e.pageX+'px'
          cursor.style.top=e.pageY+'px'
  })

  },[])
  return (
   
    <ul>
        <li>
            <a href="#">work</a>
        </li>
        <li>
            <a href="#">services</a>
        </li>
        <li>
            <a href="#">contact us</a>
        </li>
        <li>
            <a href="#">blogs</a>
        </li>
        <div className="cursor" ref={ref}></div>
    </ul>   
    
  )
}

export default UseRf
