import React from 'react' 
import NotificationHeading from '../NotificationHeading';
import NotificationList from '../NotificationList';


const notifications = [
    {
        type: 'follow',
        message: 'Daniel Burka follows you.',
        date: 'Today',
        time: '3 minutes ago'
    },
    {
        type: 'join',
        message: 'Dan Gambardello joined build_jersey.',
        date: 'Yesterday',
        time: '1 hour ago'
    },
    {
        type: 'follow',
        message: 'John Burka follows you.',
        date: 'Monday',
        time: '39 minutes ago'
    },
]

export default function AllNotification () {

    return (
        <div className=" w-[650px]" >
            
            <div className='border  min-h-[700px] border-bcolor1 px-4 py-5 animate-in zoom-in duration-400 fade-in bg-tpblack  shadow-lg rounded-3xl ' >
                <NotificationHeading />
                <div className="h-[10px] border-b border-bcolor1 my-2" > </div>
                <ul >
                    <li className="my-2" >
                        <NotificationByDate date="Today" />
                    </li>
                    <li className="my-2" >
                        <NotificationByDate date="Yesterday" />
                    </li>
                    <li className="my-2" >
                        <NotificationByDate date="Monday" />
                    </li>
                </ul>
                
               
            </div>
          
        </div>
        
    )
}


const NotificationByDate = ({date}) => {

    return (
        <div className=" min-h-[80%] mt-7" >
            <h3 className=" my-4 text-left my-1 text-neutralprimary leading-6 font-bold text-lg font-sans">{date}</h3>
            <NotificationList notifications={notifications} />
            
        </div>
    )
}


