'use client';

import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation"

const Navbar = () => {
  
  const pathname = usePathname();

  const routes = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/projects',
      label: 'Projetos',
    },
    {
      href: '/layouts',
      label: 'Layouts',
    },
    {
      href: '/design',
      label: 'Design',
    },
    {
      href: '/frontend',
      label: 'Frontend',
    },
    {
      href: '/backend',
      label: 'Backend',
    },
    {
      href: '/database',
      label: 'Database',
    },
    {
      href: '/fullstack',
      label: 'FullStack',
    },
    {
      href: '/javascript',
      label: 'JavaScript',
    },
    {
      href: '/typescript',
      label: 'TypeScript',
    },
    {
      href: '/reactjs',
      label: 'ReactJS',
    },
    {
      href: '/nextjs',
      label: 'NextJS',
    },
  ];

  return (
    <nav className="hidden xl:flex justify-center items-center space-x-4">
      {routes.map((route) => (
        <Link
         key={route.href}
         href={route.href}
         className={cn("text-sm py-1.5 hover:text-gray-600",
          pathname === route.href ? "border-b" : "text-gray-500"
         )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default Navbar