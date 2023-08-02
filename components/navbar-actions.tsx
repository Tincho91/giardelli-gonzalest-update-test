"use client";

import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return ( 
    <div className="ml-auto flex items-center gap-x-4">
      <Button onClick={() => router.push('/')} className="flex items-center rounded-full bg-black px-4 py-2">
        <LogIn 
          size={20}
          color="white"
        />
        <span className="ml-2 text-sm font-medium text-white">
          LOGIN
        </span>
      </Button>
    </div>
  );
}
 
export default NavbarActions;