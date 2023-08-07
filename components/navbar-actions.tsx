"use client";

import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  // If user is logged in, show the UserButton.
  if (user) {
    return (
      <div className="ml-auto flex items-center gap-x-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    );
  }

  // If user is not logged in, show login and register buttons.
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <ThemeToggle />
      <Button onClick={() => router.push('/sign-in')} className="flex items-center rounded-full bg-black px-4 py-2">
        <LogIn 
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">
          LOGIN
        </span>
      </Button>
      <Button onClick={() => router.push('/sign-up')} className="flex items-center rounded-full bg-black px-4 py-2">
        <LogIn 
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">
          REGISTER
        </span>
      </Button>
    </div>
  );
}
 
export default NavbarActions;
