import React, { useState } from 'react' 
import SearchResults from './SearchResults';

export default function Search() {

    const [open, setOpen] = useState(true);

    const handleFocus = () => {
        setOpen(true)
    }

    return (
        <div className=" mt-10 w-[384px] relative  h-[48px] bg-tpblack justify-center rounded-lg">
              
            <label className="flex items-center bg-tpblack h-[100%] rounded-lg ">
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" fill="rgba(242,242,242,1)"/></svg>
                <input type="text" onFocus={handleFocus}
                className=" focus:outline-none pr-2 border-0 font-normal bg-tpblack text-neutralprimary w-full text-md" placeholder="" />
              
            </label>

            {
                open && 
                <div className="absolute top-[58px] w-[384px]" >
                    <SearchResults />
                </div>

            }
            

        </div>
    )
}