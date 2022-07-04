import React, { useState } from 'react' 


export default function NoActivityNotification () {

    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className=" w-[476px]" >
           <button className="my-3" onClick={handleOpen}  >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1v2zM5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm4.5 3h5a2.5 2.5 0 1 1-5 0z" fill="rgba(201,201,201,1)"/></svg>            
           </button>
            {
                open && 
                <div className='border border-bcolor1 px-4 py-8 animate-in zoom-in  duration-400 fade-in bg-tpblack  shadow-lg rounded-3xl ' >
                    <div className="flex justify-center flex-col items-center" > 
                        <div className="flex justify-center"> <img src='/icon.png' height="68" width="68" /> </div>
                        <div className="my-2" >
                            <p className="text-center text-neutralprimary text-sm font-semibold" > No activity in the last 24 hours </p>
                            <p className="text-center text-neutralsoft text-sm font-normal leading-4 my-1" > Your daily activities will show up here. </p>        
                        </div>
                        <div className="flex  justify-center w-full my-2" >
                            <button className="text-black text-base  bg-yellowprimary w-[50%] h-[48px] font-normal text-sm rounded-lg" > See old notifications </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
} 