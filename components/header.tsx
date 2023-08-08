'use client'

import Link from "next/link"
import { cn } from "@/lib/utils";

import { Search } from "lucide-react";

import Login from "./login";

import ModeToggle from "@/components/mode-toggle";
import InputSearch from "@/components/input-search";
import SidebarNavigation from "@/components/sidebarNavigation";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin']
});

const Header = () => {

  return (
    <>
      <SidebarNavigation/>
        <Link
          href="/"
          className="hidden md:flex"
        >
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>Bloggy Student</h1>
        </Link>
      <div className="flex items-center space-x-4">
        <InputSearch
          type="text"
          placeholder="Procurar..."
          icon={Search}
        />
        <div className="flex items-center space-x-4">
          <Login/>
          <ModeToggle/>
        </div>
      </div>
    </>
  );
};

export default Header;