import React from "react";

export default function PageTitle({title}) {
    return (
        <h2 className='text-xl font-semibold text-title mb-1'>
            {title}
        </h2>
    );
}