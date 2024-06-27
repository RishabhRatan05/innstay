import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RoomCard from "@/components/RoomCard";
import RoomCarousel from "@/components/RoomCarousel";
import { CardCaraousel } from "@/components/RoomCarousel";
export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <RoomCarousel /> */}
      <div className="md:flex  flex flex-col justify-center items-center md:mr-10">
      {/* <img src="room.jpeg" className="h-80  w-full"></img> */}
      <div className="md:text-8xl text-6xl ">Find your stay with InnStay</div>
      </div>
        

      <main className="sm:px-10 h-full text-center bg-kalar-100">
        <div className="sm:flex sm:justify-between mb-3 items-center">
          <div className="sm:text-6xl col-span-1 text-4xl text-kalar-800">
            Popular
          </div>
          <div className="flex col-span-2 justify-between">
            <CardCaraousel
              chidren={
                <>
                  {/* <RoomCard /> */}
                  {/* <RoomCard /> */}
                </>
              }
            />
          </div>
        </div>
        <div className="sm:flex sm:flex-row-reverse justify-between  items-center">
          <div className="sm:text-6xl col-span-1 text-4xl text-kalar-100">Latest</div>
          <div className="flex col-span-2 justify-between">
            <CardCaraousel
              chidren={
                <>
                  {/* <RoomCard /> */}
                  {/* <RoomCard /> */}
                </>
              }
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
