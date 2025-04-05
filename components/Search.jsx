"use client";
import Image from 'next/image';

export default function Search ({onChange, onSubmit, searchValue}) {
    return (
        <form onSubmit={onSubmit}>
            <div className="flex relative">
                <Image
                    src="/assets/search.svg"
                    alt="Search"
                    width={24}
                    height={24}
                    className="absolute top-[50%] left-2 translate-y-[-50%] cursor-pointer"
                />
                <input
                    type="text"
                    className="p-2 w-[12.5rem] rounded-3xl text-[#B5B7C0] font-poppins pl-10 border-gray-200 hover:border-gray-400 transition-all duration-300 outline-none border-[1px]"
                    onChange={onChange}
                    placeholder="Buscar"
                    value={searchValue}
                />
            </div>
        </form>
    );
}