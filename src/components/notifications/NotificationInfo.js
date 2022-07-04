import React from 'react' 

const NotificationInfo = (props) => {

    const {info} = props
    const {message, type, time} = info

    return (
        <div className="flex items-center py-2" >
            <div className="flex grow shrink-5 items-center" >
                <img className="rounded-full h-[48px] " src='/copy.jpg' alt="user" width='48' height='48' />
                <div className="ml-2" >
                    <p className="text-neutralprimary font-medium leading-6 text-base font-sans" > {message} </p>
                    <p className="text-neutralsoft font-normal leading-4 text-sm relative" >{time} <span className="absolute top-1 mr-3 bg-yellowprimary inline-block rounded-full w-[4px] h-[4px]" ></span>  </p>
                </div>
            </div>
            <div className="flex w-[30%] justify-end shrink-0" >
                {
                    type === 'follow' &&
                    <button className="text-yellowprimary text-base border border-yellowprimary px-6 h-[32px]  rounded-lg" > Following </button>
                }
            </div> 
                
        </div>
    )
}

export default NotificationInfo