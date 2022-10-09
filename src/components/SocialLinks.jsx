import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
  const mylinks = [
    {
      id: 1,
      child: (
        <>
        LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://linkedin.com',
      style: 'rounded-tr-md',
      download: true,
    },
    {
      id: 2,
      child: (
        <>
        GitHub <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/academicdons',
      style: '',
      download: false,
    },
    {
      id: 3,
      child: (
        <>
        Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:foo@gmail.com',
      style: '',
      download: false,
    },
    {
      id: 4,
      child: (
        <>
        Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];
  
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed
    '>
      <ul>
        {mylinks.map(({id, child, href, style, download}) =>(
          
          <li 
            key={id} 
            className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + " " + style}>
            <a href={href}
              className='
              flex justify-between items-center w-full text-white
              '
              download={download}
              rel="noreferrer"
              target="_blank"
              >
                {child}
              </a>
          </li>
        ))};
        
      </ul>
    </div>
  )
}

export default SocialLinks