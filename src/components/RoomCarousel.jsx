'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
export default function RoomCarousel(){
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
                    <Image src="room.jpeg"  alt='room' className="w-full h-80"/>
                    
                </div>
                <div>
                    <Image src="room2.avif" alt='room' className="w-full h-80" />
                </div>
                <div>
                    <Image src="room3.avif" alt='room' className="w-full h-80"/>
                </div>
            </Carousel>

    </>
  )
}

export const CardCaraousel= ({chidren})=>{

    return (
        <Carousel
        showThumbs={false} 
        infiniteLoop ={true}
        // autoPlay ={true}
        interval={5000}
        showArrows={true}
        showStatus={false}
        stopOnHover={true}
        preventMovementUntilSwipeScrollTolerance	={true}
        className=""
        >
            {chidren}
        </Carousel>
    )
}