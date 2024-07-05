import { PopularRooms } from "@/components/client/home";
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
        <PopularRooms/>
      <Footer />
    </div>
  )
}
