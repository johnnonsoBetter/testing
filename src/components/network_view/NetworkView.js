import React from 'react' 
import NetworkList from './NetworkList';


export default function NetworkView () {

    return (
        <div className="w-full mt-10" >
            <div > 
                <img src='/meta.png' width='64' height='64' alt='meta' />
                <p className="font-bold  my-3 text-xl text-neutralprimary" > Meta Gamma Delta</p>
                <div className="flex items-center justify-start" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" fill="rgba(191,191,191,1)"/></svg>
                    <p className="font-light  mx-1 text-xs text-neutralmedium" > 5.4k</p>
                    
                </div>
                <p className="font-light text-left  mx-1 text-xs text-neutralmedium leading-6" > An inclusive and empowering society supporting women-led projects. </p>
            </div>

            <div className="h-[10px] border-b border-bcolor1 my-6" > </div>

            <div > 
                <div className="flex justify-between items-center">
                <p className="font-light text-left  mx-1 text-xs text-neutralmedium leading-6" > Name </p>
                <p className="font-light text-left  mx-1 text-xs text-neutralmedium leading-6" > Country chapters </p>
                </div>
                <NetworkList />
            </div>
        </div>

    )
}