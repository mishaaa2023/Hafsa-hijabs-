"client side"
import React from 'react'
import SecondHero from './SecondHero/page'
import Card from './SecondHero/page'
import TestimonialSlider from '../TestimonialSlider.js/page'



const Hero = () => {
  return (
    <>
    
    <section class="text-white body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-[3.5rem] mb-4 font-medium text-white  lobster-regular"style={{fontFamily:"Lobster"}}>Welcome To Hijabi Shops
        <br class="hidden lg:inline-block"/>Where the best hijabs are made!
      </h1>
      <p class="mb-8 leading-relaxed">Welcome to Hijabi Shops! We sell beautiful Hijabs of all colors and styles and designs.</p>
      <div class="flex justify-center">
        
        <button class="inline-flex text-black font-bold bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Shop now!</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-1/2 md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="/dress1.avif"style={{borderRadius:"50%"}}/>
    </div>
  </div>
</section>
  <Card/>

<section class="text-white body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-4xl mb-4 font-medium text-white lobster-two-bold">What do we Offer?
        
      </h1>
      <p class="mb-8 leading-relaxed">We offer beautiful and stunning Hijabs and clothing to our clients.We always satisfy our clients with good results!</p>
      <div class="flex justify-center">
        
        <button class="inline-flex text-black font-bold bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Shop now!</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-1/2 md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded h-full w-full" alt="hero" src="/images"style={{borderRadius:"50%"}}/>
    </div>
  </div>
</section>
<TestimonialSlider/>
<h1 className='text-center text-6xl p-4 mb-3'>Shop now!</h1>

    </>
  )
}

export default Hero