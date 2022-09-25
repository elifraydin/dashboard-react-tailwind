import React from 'react'
import { navLinks } from './utils/NavDB'

function NavBar() {
    return (
        <nav className='col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between'>
            <div className='space-y-8 w-full'>
                {navLinks.slice(0,4).map((link) => (
                    <div key={link.id} 
                    className="w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent">
                        <span>{link.icon}</span>
                        <h1 className='text-gray-600 group-hover:text-black xl:flex hidden'>
                            {link.title}
                        </h1>
                    </div>
                ))}
                <div className='w-full border-t border-gray-200'></div>
                {navLinks.slice(4,6).map((link) => (
                    <div key={link.id} 
                    className="w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent">
                        <span>{link.icon}</span>
                        <h1 className='text-gray-600 group-hover:text-black xl:flex hidden'>
                            {link.title}
                        </h1>
                    </div>
                ))}
            </div>
        </nav>
    )
}
export default NavBar