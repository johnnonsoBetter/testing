import React from 'react'



const NotificationHeading = () => {
    
    return (
        <div className="flex justify-between items-center" >
            <h3 className="text-left text-neutralprimary leading-6 font-bold text-xl font-sans">Notifications</h3> 
            <button className="text-accentblueweak text-sm" > Mark all as read</button>
        </div>
    )
}


export default NotificationHeading