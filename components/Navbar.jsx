"use client";
import { useSession } from "next-auth/react";
import { Button } from "./ui/button";
export default function Navbar() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      <nav className="flex items-center justify-between w-full h-16 bg-primary text-primary-foreground">
        <div className="flex items-center">
          <span className="ml-4 font-bold">Next.js Starter Kit</span>
        </div>
        <div className="flex items-center">
          <Button className="ml-4 px-4 py-2 text-sm font-black tracking-wide">
            Login
          </Button>
          <Button className="ml-4 px-4 py-2 text-sm font-black tracking-wide">
            Sign Up
          </Button>
        </div>
      </nav>
    </>
  );
}
