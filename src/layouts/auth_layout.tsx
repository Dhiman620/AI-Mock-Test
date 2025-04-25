import { Outlet } from "react-router"

const AuthenticationLayout = () => {
  return (
    <div>
      <div className=" w-screen h-screen overflow-hidden flex items-center justify-center relative">
        <img src="/assets/img/bg.png" className=" absolute w-full h-full object-cover opacity-20" alt="" />

        <Outlet/>

      </div>
    </div>
  )
}

export default AuthenticationLayout
