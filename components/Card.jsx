import React, { Children } from "react"

export default function Card({children}) {
    return (
        <div className="bg-white rounded-3xl shadow-[0px_10px_60px_rgba(226,_236,_249,_1)] px-4 py-5">
            {children}
        </div>
    );
}
