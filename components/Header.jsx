import {React, useState} from 'react';
import Link from 'next/link';

const Header = () => {
    const [isOpen , setIsOpen] = useState(false)
    const [isMenuOpen , setIsMenuOpen] = useState(false)
    const [isResourceOpen , setIsResourceOpen] = useState(false)

    const onClickHeader = () => {
        setIsOpen(!isOpen)
    }
    const onClickMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const onClickResource = () => {
        setIsResourceOpen(!isResourceOpen)
    }
  return (
   <>
   <div className='bg-gray-800 ' x-data="{navbarOpen:false}">
    <div className='container mx-auto py-4 flex flex-wrap px-4'>
    
    <button className='inline-flex items-center justify-center border h-10 w-10
    text-white rounded-md outline-none focus:outline-none mx-4
    
    ' onClick={onClickHeader}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
</svg>

    </button>

<div className={`w-full lg:inline-flex lg:w-auto mt-2 lg:mt-0 ${!isOpen ? 'hidden':''}`}

>
    <ul className='flex flex-col w-full lg:flex-row lg:space-x-2 space-y-2 lg:space-y-0'>
        <li className='flex  flex-col lg:flex-row  relative'>
            <a  className='flex px-4 py-2 
            font-medium text-white 
            rounded-md
            hover:bg-black
            cursor-pointer
            
            ' href='#'>Products

            <button  className={`text-white px-3`} onClick={onClickMenu}>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

            </button></a>

            <div className={`lg:absolute  bg-gray-800 text-white right-0 rounded-md top-8 ${!isMenuOpen ? 'hidden':''}`}>
                <ul className='space-y-2.5'>
                    <li className='hover:bg-black px-6  py-1 w-full rounded-md cursor-pointer'>
                        <a className=''>Product1</a>
                    </li>

                    <li className='hover:bg-black px-6 py-1 rounded-md cursor-pointer'>
                        <a>Product2</a>
                    </li>

                    <li className='hover:bg-black px-6  py-1 rounded-md cursor-pointer'>
                        <a>Product3</a>
                    </li>
                </ul>
            </div>
        </li>

        <li>
            <a  className='flex px-4 py-2 
             font-medium text-white
             rounded-md
             hover:bg-black
             cursor-pointer
             'href='#'>Our Story</a>
        </li>

        <li className='relative'>
            <a  className='flex px-4 py-2 
            font-medium text-white
            rounded-md
            hover:bg-black
            cursor-pointer
            
            'href='#'
            
            >Resources
            <button  className={`text-white px-3`} onClick={onClickResource}>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

            </button>
            </a>
            <div className={`lg:absolute  bg-gray-800 text-white right-0 rounded-md top-8 ${!isResourceOpen ? 'hidden':''}`}>
                <ul className='space-y-2.5'>
                    <li className='hover:bg-black px-6  py-1 w-full rounded-md cursor-pointer'>
                        <a className=''>Reason1</a>
                    </li>

                    <li className='hover:bg-black px-6 py-1 rounded-md cursor-pointer'>
                        <a>Reason2</a>
                    </li>

                </ul>
            </div>
        </li>
    </ul>
</div>
<button type="button" className={`bg-gradient-to-r from-blue-600 to-purple-700 md:from-indigo text-white
  font-medium py-1 px-4 rounded-lg cursor-pointer my-2 lg:my-0 ml-auto`}>
  Book a demo
</button>

   </div>
   </div>
   
   
   
   </>
  )
}

export default Header
