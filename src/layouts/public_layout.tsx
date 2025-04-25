import { Footer } from "@/components/footer";
import Header from "@/components/header";
import AuthHandler from "@/handlers/auth_hendler";
import { Outlet } from "react-router";

export const PublicLayout = () => {
  return (
    <div>
      <div className=" w-full">
        {/*handelar to store data*/}
        <AuthHandler />
        <Header />

        <Outlet />

        <Footer />
      </div>
    </div>
  );
};
