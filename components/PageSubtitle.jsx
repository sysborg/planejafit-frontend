import React from "react";
import Search from "./Search";

export default function PageSubtitle({subtitle}) {
    return (
        <div className="flex items-center justify-between">
            <p className='text-sm text-subtitle mb-4 font-medium'>{subtitle}</p>
            <Search onChange={() => {}} onSubmit={() => {}} searchValue={""} />
        </div>
    );
}