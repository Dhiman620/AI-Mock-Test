import Footer from "@/components/footer"
import Header from "@/components/header"
import { Outlet } from "react-router"

export const PublicLayout = () => {
  return (
    <div>
      <div className=" w-full">
        {/*handelar to store data*/}
        <Header/>

        <Outlet/>

        <Footer/>
      </div>
    </div>
  )
}
