import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="text-whitebody-font bg-zinc-950 text-white">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <Link href={'/'} className='mr-5'>Home</Link>
      <Link href={'/contact'} className='mr-5'>Contact</Link>
      <Link href={'/shop'} className='mr-5'>Shop now</Link>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
      
      <span className="ml-3 text-xl lobster-regular"style={{fontFamily:"Lobster"}}>Hafsa Hijabs</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button className="inline-flex items-center text-black font-bold bg-gray-100 border-0 py-1 px-2 focus:outline-none hover:bg-black rounded text-lg  transition-all ease-in 5s black-btn">Sign in
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</header>
  )
}

export default Navbar