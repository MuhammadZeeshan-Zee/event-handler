import React from 'react'

function Wedo() {
  return (
    
    <div className=' h-fit max-w-1200 bg-mybg text-white p-3.5 pb-16  '>
     {/* <h1 className=' invisible bg-clip-text text-8xl font-bold text-mycolor text-center'>We do</h1> */}
     <h1 className=' invisible sm:visible bg-clip-text text-8xl font-bold text-mycolor text-center'>We do</h1>
     
      

      <div className='mt-12 grid grid-cols-2 sm:grid-cols-2  md:grid-cols-5 gap-7 font-bold md:place-items-center'>
      
      <div>  
      <img className='pb-8' src="section4Card1Image.svg" alt="image source not found"></img>
      <h1 className='w-24'>Pitch Deck Design </h1>
      </div>
      
      <div >
      <img className='pb-8' src="section4Card2Image.svg" alt="image source not found"></img>
     <h1 className='w-24'>Branding & Advertising</h1>
      </div>
      
      <div>
      <img className='pb-8' src="section4Card3Image.svg" alt="image source not found"></img>
      <h1 className='w-24'>Web & App Design</h1>
      </div>
      
      <div>
      <img className='pb-8' src="section4Card4Image.svg" alt="image source not found"></img>
      <h1 className='w-24'>Content & Marketing</h1>
      </div>
      <div>
      <img className='pb-8' src="section4Card5Image.svg" alt="image source not found"></img>
      <h1 className='w-28'>Video & Motion Design</h1>
      </div>

      </div>
      
     <div className='md:pl-44  mt-12 md:mt-28'>
    <hr className='text-hrcolor w-56'/>
    </div>
    <div className='md:pl-44 text-mycolor w-full text-xl font-bold md:text-3xl md:w-3/4 mt-12'>
    We help you communicate your brand & your company story more effectively with powerful visual and verbal assets
    </div>
    <div className='md:pl-44  mt-12 font-bold underline underline-offset-8 text-hrcolor'>
    START YOUR STORY WITH US
    </div>
      
    </div>
    
  )
}

export default Wedo

