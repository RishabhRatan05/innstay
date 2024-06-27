'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default ()=>{
  return(
        <>
        <Carousel
                        showThumbs={false} 
        infiniteLoop ={true}
        // autoPlay ={true}
        interval={5000}
        showArrows={false}
        showStatus={false}
        stopOnHover={true}
        preventMovementUntilSwipeScrollTolerance	={true}
        className=""
                >
                <div>
                    <img src="room.jpeg"  className="w-full h-80"/>
                    
                </div>
                <div>
                    <img src="room2.avif" className="w-full h-80" />
                </div>
                <div>
                    <img src="room3.avif"  className="w-full h-80"/>
                </div>
            </Carousel>

    </>
  )
}

export const CardCaraousel= ({chidren})=>{
    return (
        <Carousel
            infiniteLoop={true}
            className=""
        >
            {chidren}
        </Carousel>
    )
}