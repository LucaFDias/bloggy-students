'use client';

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import LogoIcon from '@/public/vercel.svg';

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin']
});

const Sidebar = () => {
  
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
      href: '/',
      label: 'Layout',
    },
    {
      href: '/',
      label: 'Design',
    },
    {
      href: '/',
      label: 'Frontend',
    },
    {
      href: '/',
      label: 'Backend',
    },
    {
      href: '/',
      label: 'Database',
    },
    {
      href: '/',
      label: 'FullStack',
    },
    {
      href: '/',
      label: 'JavaScript',
    },
    {
      href: '/',
      label: 'TypeScript',
    },
    {
      href: '/',
      label: 'ReactJS',
    },
    {
      href: '/',
      label: 'NextJS',
    }
  ];

  return (
    <nav className="space-y-4 py-4 flex flex-col h-full relative">
      <div className="px-3 py-2 flex-1  overflow-auto">
        <Link
          href="/"
          className="flex items-center pl-3 mb-6"
        >
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>Bloggy Student</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-gray-600 hover:bg-black/10 rounded-lg transition")}
            >
              <div 
                className="flex items-center justify-between flex-1"
              >
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className="flex justify-center gap-x-1 text-sm text-center absolute bottom-0 w-full py-3">
          Desenvolvido por 
          <Link
            href="/"
            className={cn("text-sky-900", montserrat.className)}
          >
            Lucas Dias
          </Link>
        </p>
      </div>
    </nav>
  )
}

export default Sidebar