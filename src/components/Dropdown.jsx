import React from "react";
import { ChevronDown } from "react-feather";
const Dropdown = (props) =>{
    return (
        <div>
            <div className="secondaryButton rounded-lg">
                My options <ChevronDown className="w-4 ml-1 hover:rotate-180 transition-1s"/>
            </div>
            <div className="bg-black-10 py-2 text-black-70 font-medium rounded-lg shadow-md border border-black-20 mt-1 max-w-fit cursor-pointer hidden">
                {[
                    ['Home', 'https://google.com'],
                    ['Hello, good morning', 'https://facebook.com'],
                    ['Goodbye dude', 'https://quora.com'],
                ].map(([title, url]) =>(
                  <div className="py-2 border-b border-black-20 px-4  last-of-type:border-0">
                   <a href={url} className="no-underline text-black-70  hover:text-blue-50">
                    {title}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dropdown