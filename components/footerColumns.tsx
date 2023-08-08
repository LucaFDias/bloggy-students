import Link from 'next/link';

interface ColumnsProps  {
  title: string;
  links: Array<string>;
  hrefUrl: Array<string>;
}

const FooterColumns: React.FC<ColumnsProps> = ({
  title,
  links,
  hrefUrl
}) => {

  return (
    <div className='flex flex-col space-y-2'>
      <h4 
        className='font-semibold text-sm'>
          {title}
      </h4>
      <div>
       {links.map((link, index) => (
          <Link
            key={index}
            href={hrefUrl[index] || ''}
            className='text-sm text-gray-500 hover:text-gray-600 mb-1.5 flex flex-col'
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FooterColumns;