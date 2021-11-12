import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/dist/client/image"
import { useRouter } from "next/dist/client/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
function Header() {
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
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src="https://cdn.vox-cdn.com/thumbor/Ous3VQj1sn4tvb3H13rIu8eGoZs=/0x0:2012x1341/1400x788/filters:focal(0x0:2012x1341):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" height={40} width={120} className="cursor-pointer" onclick={() => router.push("/")}
                />
                <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5" >
                    <input type="text" ref={searchInputRef} className="flex-grow w-full focus:outline-none" />
                    <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" onClick={() => searchInputRef.current.value = ""} />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search} >Search</button>
                </form>
                <Avatar className="ml-auto" url="https://images4.alphacoders.com/292/thumb-1920-292014.jpg" />
            </div>
            {/* header options */}
            <HeaderOptions />

        </header>
    );
}

export default Header;
