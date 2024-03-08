import React from 'react'

function Wedo() {
  return (
    <div className='max-w-1200 bg-mybg text-white'>
     <h1 className='bg-clip-text text-8xl font-bold text-mycolor'>We do</h1>
     
      

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-7 font-bold'>
      
      <div>  
      <img className='pb-8' src="section4Card1Image.svg" alt="image source not found"></img>
      <h1 className='max-w-12'>Pitch Deck Design </h1>
      </div>
      
      <div >
      <img className='pb-8' src="section4Card2Image.svg" alt="image source not found"></img>
     <h1 className='max-w-12'>Branding & Advertising</h1>
      </div>
      
      <div>
      <img className='pb-8' src="section4Card3Image.svg" alt="image source not found"></img>
      <h1 className='max-w-12'>Web & App Design</h1>
      </div>
      
      <div>
      <img className='pb-8' src="section4Card4Image.svg" alt="image source not found"></img>
      <h1 className='max-w-12'>Content & Marketing</h1>
      </div>
      <div>
      <img className='pb-8' src="section4Card5Image.svg" alt="image source not found"></img>
      <h1 className='max-w-12'>Video & Motion Design</h1>
      </div>

      </div>
    </div>
  )
}

export default Wedo

