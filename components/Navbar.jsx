import Search from "./Search";

export default function Navbar({onChange, onSubmit, searchValue}) {
    return (
        <div className="flex align-center justify-between px-4 py-0 ">
            <p className="font-poppins text-[24px] font-[400] leading-[36px] text-[#000000]">
                Olá Usuário!
            </p>
            <Search onChange={onChange} onSubmit={onSubmit} searchValue={searchValue} />
        </div>
    );
}
