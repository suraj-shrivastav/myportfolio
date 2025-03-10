import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/suraj-shrivastav/',
            style: 'rounded-tr-md bg-gradient-to-r from-emerald-600 to-teal-700'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/suraj-shrivastav/',
            style: 'bg-gradient-to-r from-emerald-600 to-teal-700'
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:surajshrivastav07@gmail.com',
            style: 'bg-gradient-to-r from-emerald-600 to-teal-700'
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Suraj_Shrivastav_Resume.pdf',
            style: 'rounded-br-md bg-gradient-to-r from-emerald-600 to-teal-700',
            download: true,
        },
    ]

    return (
        <div className='hidden lg:flex flex-col top-[30%] left-0 fixed'>
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} rel="noopener" className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}`}>
                        <a href={href} className="flex justify-between items-center w-full text-white" download={download} rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks;