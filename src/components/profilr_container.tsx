import { useAuth, UserButton } from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

export const ProfileContainer = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className=" flex items-center">
        <Loader className=" min-w-4 min-h-4 animate-spin text-emerald-500" />
      </div>
    );
  }
  return (
    <div>
      {isSignedIn ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <Link to={"/singin"}>
          <Button size={"sm"}>Get Started</Button>
        </Link>
      )}
    </div>
  );
};
