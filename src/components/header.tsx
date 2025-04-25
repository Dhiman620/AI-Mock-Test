import { useAuth } from "@clerk/clerk-react";
import { Container } from "./container";
import { LogoContainer } from "./logo_container";
import { NavigationRoutes } from "./navigatiom_routes";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";
import { ProfileContainer } from "./profilr_container";
import { ToggleContainer } from "./toggle_container";

const Header = () => {
  const { userId } = useAuth();
  return (
    <header className=" w-full border-b duration-150 transition-all ease-in-out">
      <Container>
        <div className=" flex items-center gap-4 w-full">
          {/*logo section */}
          <LogoContainer />

          {/*Nevigation section */}
          <nav className=" flex items-center gap-4 w-full">
            <NavigationRoutes />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    " text-base text-neutral-600",
                    isActive && " text-neutral-950 font-semibold"
                  )
                }
              >
                Tack an Interview
              </NavLink>
            )}
          </nav>

          {/*profile section */}
          <div className=" ml-auto flex items-center gap-6">
            {/*Profile section */}
            <ProfileContainer />

            {/*mobile toggle section */}
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
