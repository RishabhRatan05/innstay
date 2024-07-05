import { LatestRooms, PopularRooms } from "@/components/client/home";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
        <div className="sm:grid grid-cols-3 mb-3 items-center">
          <div className="sm:text-6xl col-span-1 text-4xl text-kalar-800">
            Popular
          </div>
          <div className=" col-span-2 ">
            <PopularRooms/>
          </div>
        </div>
        <div className="sm:grid grid-cols-3 mb-3 items-center">
          <div className="col-span-2">
            <LatestRooms/>
          </div>
          <div className="sm:text-6xl col-span-1 text-4xl text-kalar-800">Latest</div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
