import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavigationRoutes } from "./navigatiom_routes";
import { useAuth } from "@clerk/clerk-react";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";

export const ToggleContainer = () => {
  const { userId } = useAuth();
  return (
    <Sheet>
      <SheetTrigger className=" block md:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle />
        </SheetHeader>
        <nav className=" gap-6 flex flex-col items-start">
          <NavigationRoutes isMobile />
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
      </SheetContent>
    </Sheet>
  );
};
