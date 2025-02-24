import React from "react"

export default function CircleAvatar({firstLetter, onclick}) {
    return (
        <div onClick={onclick} className={`bg-green-400 p-4 rounded-full w-10 h-10 flex items-center justify-center font-bold`}>
            {firstLetter}
        </div>
    )
}