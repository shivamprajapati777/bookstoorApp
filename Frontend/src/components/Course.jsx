// eslint-disable-next-line no-unused-vars
import React from 'react'
import Cards from './Cards'
// eslint-disable-next-line no-unused-vars
import list from '../../public/list.json'
// eslint-disable-next-line no-unused-vars
import {Link} from 'react-router-dom'
function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4' >
    <div className='mt-28 items-center justify-center text-center'>
    <h1 className='text-2xl md:text-4xl'> Were delighted to have 
    <span className='text-pink-500'>
    Here!!
    </span>
    </h1>
    <p className='mt-12'>I have written a few thousand words on why traditional 
    “semantic class names” are the reason CSS is hard to maintain, but the truth is 
    youre never going to believe me until you actually try it. If you
     can suppress the urge to retch long enough to
     </p>
    <Link to='/'>
    <button className='bg-pink-500 mt-6 text-white py-4 px-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
    </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'> 
    {
    list.map((item)=>(
    // eslint-disable-next-line react/jsx-no-undef
    <Cards key={item.id} item={item} />
    ))
    }
    </div>
    </div>
    </>
  )
}

export default Course