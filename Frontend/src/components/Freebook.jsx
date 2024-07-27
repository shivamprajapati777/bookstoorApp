// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// eslint-disable-next-line no-unused-vars
import Slider from "react-slick";
import Cards from './Cards';
function Freebook() {
    // eslint-disable-next-line no-unused-vars
    const filterData= list.filter((data)=>data.category==="Free");
    // eslint-disable-next-line no-unused-vars
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
  return (
   <>
   <div>
   <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4"> 
   <h1 className='font-semibold text-xl pb-2'>Free Offered Cources</h1>
   <p>Every utility class in Tailwind can be applied conditionally at different breakpoints, which makes it a piece
    of cake to build complex responsive interfaces without ever leaving your </p>
   </div>
   
   <div>
   <Slider {...settings}>
   {filterData.map((item)=>(
    <Cards item={item} key={item.id}/>
   ))}
 </Slider>
   </div>
   </div>
   </>
  )
}

export default Freebook