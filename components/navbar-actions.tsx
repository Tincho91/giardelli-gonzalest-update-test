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
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
      
    );
  }

  // If user is not logged in, show login and register buttons.
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <ThemeToggle />
      <Button onClick={() => router.push('/sign-in')} className="flex items-center border px-4 py-2 bg-opacity-100">
        <LogIn 
          size={20}
        />
        <span className="ml-2 text-sm font-medium">
          LOGIN
        </span>
      </Button>
    </div>
  );
}
 
export default NavbarActions;
