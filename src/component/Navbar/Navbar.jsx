import React from 'react'
import DarkMode from './DarkMode'
import logo from '../../assert/logo.png'
import { BiPhoneCall } from "react-icons/bi"

export const Navlinks = [
  {
    name: "SERVICES",
    link: '#/services',
  },
  {
    name: "ABOUT",
    link: '#/about'
  },
  {
    name: "JOIN",
    link: '#/join'
  }
]


const Navbar = () => {
  return (
    <nav>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div className="flex gap-2 group">
            <BiPhoneCall className='text-2xl text-primary  animate-pulse group-hover:scale-105' />
            <span>+923098489392</span>
          </div>
          <div className="">
            <img src={logo} alt="" className='w-16 sm:w-24 m-2' />
          </div>
          <div className="">
            <ul className='flex items-center gap-8'>
              {
                Navlinks.map((item, index) => (
                  <li className='' key={index} >
                    <a href={item.link}>
                      {item.name}
                    </a>
                  </li>
                ))
              }
              <DarkMode/>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar