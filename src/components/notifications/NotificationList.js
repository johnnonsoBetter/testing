import React from 'react'
import NotificationInfo from './NotificationInfo';




const NotificationList = ({notifications}) => {

    return (
        <div className="my-1" >
            <ul >
                {
                    notifications.map(info => {

                        return (
                            <li className="my-2" key={info.message} >
                                <NotificationInfo  info={info}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default NotificationList