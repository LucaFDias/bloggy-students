import Header from '@/components/header';

const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className='
        md:container 
        md:mx-auto 
        px-5 
        py-2'
    >
      <div 
        className="
          flex 
          items-center 
          justify-between 
          w-full 
          pb-1.5 
          border-b"
      >
        <Header/>
      </div>
      {children}
    </div>
  )
}

export default Layout