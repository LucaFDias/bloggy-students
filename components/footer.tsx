import Link from 'next/link';

import { cn } from '@/lib/utils';

import FooterColumns from './footerColumns';
import { FooterLinks } from '@/data/footerLinks';

import { Inter } from "next/font/google";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const montserrat = Inter({
  weight: '600',
  subsets: ['latin']
});

const Footer = () => {
  return (
    <>
      <footer 
        className="
          grid 
          grid-cols-2
          sm:grid-cols-3 
          md:grid-cols-5
          gap-4
          mt-10 
          border-t
          p-5"
        >
        <div>
          <FooterColumns
            title={FooterLinks[0].title}
            links={FooterLinks[0].links}
            hrefUrl={FooterLinks[0].hrefUrl}
          />
        </div>
        <div>
          <FooterColumns
            title={FooterLinks[1].title}
            hrefUrl={FooterLinks[1].hrefUrl}
            links={FooterLinks[1].links}
          />
        </div>
        <div className='flex flex-col space-y-5'>
          <FooterColumns
            title={FooterLinks[2].title}
            hrefUrl={FooterLinks[2].hrefUrl}
            links={FooterLinks[2].links}
          />
          <FooterColumns
            title={FooterLinks[5].title}
            hrefUrl={FooterLinks[5].hrefUrl}
            links={FooterLinks[5].links}
          />
        </div>
        <div className='flex flex-col space-y-5'>
          <FooterColumns
            title={FooterLinks[3].title}
            hrefUrl={FooterLinks[3].hrefUrl}
            links={FooterLinks[3].links}
          />
          <FooterColumns
            title={FooterLinks[4].title}
            hrefUrl={FooterLinks[4].hrefUrl}
            links={FooterLinks[4].links}
          />
        </div>
        <div className='space-y-4'>
          <Link
            href="/"
            className="flex items-center"
          >
            <h1 className={cn
              ("text-lg md:text-xl font-bold", montserrat.className)}>Bloggy Student</h1>
          </Link> 
          <p className='text-xs text-gray-500'>Plataforma de estudos prático, com as melhores tecnologias do mercado, saiba o que usar e como usar de maneira prática, rápida e fácil.</p>
          <div className='flex justify-center items-center text-gray-500 space-x-5'>
            <Link 
              href=""
            >
              <BsGithub size={20}/>
            </Link>
            <Link 
              href=""
            >
              <BsInstagram size={20}/>
            </Link>
            <Link 
              href=""
            >
              <BsFacebook size={20}/>
            </Link>
            <Link 
              href=""
            >
              <BsLinkedin size={20}/>
            </Link>
          </div>
        </div>
      </footer>
      <div className='text-center mt-10 py-5 border-t'>
        <p className='text-xs text-gray-500'>Bloggy Students © copyright. A Plataforma foi desenvolvida para ajudar a comunidade Dev iniciante. <br/>Qualquer empresa que se sentir lesada pelo meu conteúdo, por favor, entrar em contato via e-mail: lucasferndias@gmail.com.</p>
      </div>
    </>
  );
};

export default Footer;