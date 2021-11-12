import Head from 'next/head';
import Image from 'next/image';
import Avatar from '../components/Avatar';
import { MicrophoneIcon, SearchIcon, ViewGridIcon } from "@heroicons/react/solid";
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) {
      return;
    }
    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen" >
      <Head>
        <title>Google</title>
        <link rel="icon" href="https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png" />
      </Head>
      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700" >
        {/* Left */}
        <div className="flex space-x-4 items-center" >
          <p className="hover:underline cursor-pointer" >About</p>
          <p className="hover:underline cursor-pointer" >Store</p>
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center" >
          <p className="hover:underline cursor-pointer" >Gmail</p>
          <p className="hover:underline cursor-pointer" >Images</p>
          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://images4.alphacoders.com/292/thumb-1920-292014.jpg" />
        </div>
      </header>
      {/* Body */}
      <form className="flex flex-col items-center mt-15 flex-grow w-4/5 " action="">
        <Image src="https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" height={200} width={300} />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl" >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5 mr-3 text-gray-500" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 ">
          <button onclick={search} className="bg-[#f8f9fa] p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md" >Google Search</button>
          <button onclick={search} className="bg-[#f8f9fa] p-3 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 hover:shadow-md" >I'm Feeling Lucky</button>
        </div>

      </form>
      {/* Footer */}
      <Footer />
    </div>
  )
}
