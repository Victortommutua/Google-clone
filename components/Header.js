/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useRef } from 'react/cjs/react.development';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';
function Header() {
const router = useRouter();
const searchInputRef = useRef(null);
const search = (e) =>{
    e.preventDefault();
    const term= searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`);
}
  return (
    <header className='sticky top-0 bg-white'>
        <div className='flex w-full p-6 items-center'>
        <Image
      src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
      height={40}
      width={120}
      onClick={() => router.push("/")}
      className='cursor-pointer'
      />
      <form className='flex flex-grow border  border-gray-200
      rounded-full shadow-lg max-w-3xl items-center'>
          <input ref={searchInputRef} 
          className='flex-grow w-full focus:outline-none' 
          type='text'/>
          <XIcon className='h-7 sm:mr-3 text-gary-500 cursor-pointer
          tansition duration-100 transform hover:scale-125'
          onClick={()=>(searchInputRef.current.value="")}/>
          <MicrophoneIcon
          className=' mr-3 h-6 hidden sm:inline-flex text-blue-500
          border-l-2 pl-4 border-gray-300'/>
          <SearchIcon className='h-6 text-blue-500 hidden 
          sm:inline-flex'/>
          <button hidden type='submit'></button>
      </form>
      <Avatar className='ml-auto' url="https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/264566663_2096771347144151_3357368712747444329_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHYAWlwG1hiz12G_GbdlXd7VMN4ofWpvulUw3ih9am-6Z3E78R7HI85oiPHWcbJ0zzp1FxAVRCK0_QgM7UUZJMx&_nc_ohc=CgnahP8jGHIAX8gxJrq&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&oh=00_AT_nAaGnVn0WqkjMI4eNqt5OOmcIXc8Pll0hUqF5siAIiQ&oe=620423EB"/>
        </div>
        <HeaderOptions/>
    </header>
  )
}

export default Header
