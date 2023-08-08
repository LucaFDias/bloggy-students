'use client'

import Link from "next/link";
import Image from "next/image";

import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

const Login = () => {
  const {data: session } = useSession();

  return (
    <>
      {
        session 
          ? (
            <Button variant="avatar"
              className="flex items-center"
              onClick={() => signOut()}
            >
              <Image
                src={session.user?.image || require("@/public/avatar.png")}
                width={34}
                height={34}
                className="rounded-full object-cover"
                alt="Avatar"
              />
            </Button>
          ) : (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" size="default">
                  login
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link
                    href="/login"
                    className="w-full"
                  >
                    Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/register"
                    className="w-full"
                  >
                    Registrar
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )
      }
    </>
  )
}

export default Login