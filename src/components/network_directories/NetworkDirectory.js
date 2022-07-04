import React, { useState } from 'react' 
import DirectoryList from './DirectoryList';


export default function NetworkDirectory () {

    return (
        <div className="w-full mt-10" >
           <div className="flex  items-center justify-between mb-10" >
                
                <div className="ml-2  flex items-center " >
                <p className="font-bold   text-xl text-neutralprimary" > Network Directory</p>
                </div>
                <div className="ml-2  flex items-center justify-end " >
                    <Search />
                    <Sort />
                </div>
                
            </div>

            <DirectoryList />
        </div>

    )
}


const Sort = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
    }

   
    return (
        <button onClick={handleClick}  className="relative h-[40px] mx-2 "  >
            <div className="flex items-center h-[100%] rounded-lg ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M10 14L4 5V3h16v2l-6 9v6l-4 2z" fill="rgba(191,191,191,1)"/></svg>
            <p className="text-sm pr-2 pl-1 font-normal text-neutralmedium" > Sort </p>
            </div>

            {
                open &&
                <div className=" w-[200px] top-[45px] " >
                    <SortMenuList />
                </div>
            }


        </button>

    )
}


const Search = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true)
    }

    return (
        <div className=" w-[200px] relative  flex items-center  justify-end rounded-lg">
              
            <button onClick={handleClick} >
                <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" fill="rgba(242,242,242,1)"/></svg>
            </button>
            {
                open && 
                
                <div className="absolute" >
                    <SearchMenu />
                </div>

            }
            

        </div>
    )
}


const SearchMenu = () => {

    const [open, setOpen] = useState(false)

    const handleFoucus = () => {
        setOpen(true)
    }

    const handleBlurFocus = () => {
        setOpen(false)
    }

    return (
        <div className="relavite top-[0px] w-[200px] h-[40px] animate-in zoom-in" >
            <label className="flex items-center bg-tpblack h-[100%] rounded-lg ">
            <svg className="mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" fill="rgba(242,242,242,1)"/></svg>
                <input type="text"  onFocus={handleFoucus} onBlur={handleBlurFocus}
                className=" focus:outline-none pr-2 border-0 font-normal bg-tpblack text-neutralprimary w-full text-md" placeholder="" />
            
            </label>

            {
                open &&
                <div className="top-[45px] absolute w-full" >
                    <MenuList />
                </div>
                
            }


        </div>

    )
}

const MenuList = () => {

    return (
        <ul className="border rounded-lg border-bcolor1 animate-in zoom-in fade-in   bg-tpblack px-2  " >
            <li className="my-4 py-1 px-3 border rounded-lg border-bcolor1"  >
                <a href="#" className=" flex grow shrink-5 items-center my-2" >
                    <img className="rounded-full  " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4WsISzNp4Fj6bRe2RYtSSSYBCKNLYILgxkw&usqp=CAU' alt="user" width='32' height='32' />
                    <div className="ml-3" >
                        <p className="text-neutralprimary font-normal leading-6 text-sm " > Forefront </p>
                    </div>
                </a>
            </li>

            <li  className="my-4 py-1 px-3 border rounded-lg border-bcolor1" >
                <a href="#" className="flex grow shrink-5 items-center my-2" >
                    <img className="rounded-full  " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1x9COaN_8x4vRpzBfH_qTQz-501SrsI5gQ&usqp=CAU' alt="user" width='32' height='32' />
                    <div className="ml-3" >
                        <p className="text-neutralprimary font-normal leading-6 text-sm " > Forefront </p>
                    </div>
                </a>
            </li>
        </ul>
    )
}

const SortMenuList = () => {

    return (
        <ul className="border rounded-lg border-bcolor1 animate-in zoom-in fade-in   bg-tpblack px-2  " >
            <li className="my-4 py-1 px-3 "  >
                <a href="#" className=" flex grow shrink-5 items-center " >
                    <div className="ml-3" >
                        <p className="text-yellowprimary font-normal leading-6 text-sm " > Time Joined </p>
                    </div>
                </a>
            </li>

            <li  className="my-4 py-1 px-3 " >
                <a href="#" className="flex grow shrink-5 items-center " >
                    <div className="ml-3" >
                        <p className="text-neutralprimary font-normal leading-6 text-sm " > Forefront </p>
                    </div>
                </a>
            </li>
        </ul>
    )
}