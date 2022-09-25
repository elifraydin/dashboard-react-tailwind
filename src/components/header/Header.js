import React from 'react'
import { BiSearch, BiBell, BiUserCircle } from 'react-icons/bi';
import { HiOutlineChip, HiOutlineInbox } from 'react-icons/hi';




export default function Header() {
  return (
    <div className='w-full py-6 bg-[#F0F5F5] items-center justify-between flex px-12'>


      <div className='w-full lg:flex hidden space-x-4 items-center justify-start py-2'>
      <BiSearch className="w-4 h-4" />
        <input
          type="text"
          placeholder="Search anything..."
          className="bg-transparent outline-none"
        />
      </div>


      <div className="items-center w-full justify-center flex space-x-4">
        <HiOutlineChip className="w-6 h-6" />
        <h1 className="text-xl text-gray-900 font-medium "> DevSite </h1>
      </div>


      <div className="items-center justify-end space-x-6 flex w-full">
        <BiBell className="header-icon" />
        <HiOutlineInbox className="header-icon" />
        <BiUserCircle className="header-icon" />
      </div>



      <div></div>
      <div></div>

    </div>
  )
}
