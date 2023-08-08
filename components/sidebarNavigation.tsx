'use client';

import { useEffect, useState } from 'react'

import { 
  Sheet,  
  SheetContent, 
  SheetTrigger 
} from '@/components/ui/sheet'
import Sidebar from '@/components/sidebar'
import { Button } from '@/components/ui/button'

import { Menu } from 'lucide-react'

const SidebarNavigation = () => {
  // error de hidatraço debug
  const [ isMounted, setIsMounted ] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if(!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size='icon'>
          <Menu/>
        </Button>
      </SheetTrigger>
      <SheetContent className='p-0 m-0' side='left'>
          <Sidebar/>
      </SheetContent>
    </Sheet>
  )
}

export default SidebarNavigation