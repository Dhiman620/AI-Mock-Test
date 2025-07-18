import { MainRoutes } from "@/lib/helper"
import { cn } from "@/lib/utils"
import { NavLink } from "react-router"

interface NavigationRoutersProps{
  isMobile?:boolean
}
export const NavigationRoutes = ({isMobile = false}:NavigationRoutersProps) => {
  return (
    <ul className={cn("flex items-center gap-6",isMobile && " items-start flex-col gap-8")}>
      {MainRoutes.map(route =>(
        <NavLink key={route.href} to={route.href} className={({isActive})=> cn(" text-base text-neutral-600", isActive &&" text-neutral-950 font-semibold")}>
          {route.lebel}
        </NavLink>
      ))}
    </ul>
  )
}
