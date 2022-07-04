import React from 'react' 

export default function SearchResults () {

    return (
        <div className='border border-bcolor1 px-4 py-5 animate-in zoom-in duration-400 fade-in bg-tpblack min-h-[450px] shadow-lg rounded-3xl ' >

            <div className="div">
                <h3 className=" my-4 text-left my-1 text-neutralprimary leading-6 font-normal text-sm">Chapters</h3>
                <Results />
            </div>
            <div className="div">
                <h3 className=" my-4 text-left my-1 text-neutralprimary leading-6 font-normal text-sm">Users</h3>
                <Results />
            </div>
            <div className="div">
                <h3 className=" my-4 text-left my-1 text-neutralprimary leading-6 font-normal text-sm">DAOS</h3>
                <Results />
            </div>
                    
        </div>
    )
}


const Results = () => {
    return (
        <div className="mt-3" >
            <ul >
                <li className="my-2" >
                    <div className="flex grow shrink-5 items-center" >
                        <img className="rounded-full  " src='/copy.jpg' alt="user" width='32' height='32' />
                        <div className="ml-2" >
                            <p className="text-neutralprimary font-normal leading-6 text-sm " > Lisbon </p>
                        </div>
                    </div>
                </li>

                <li className="my-2" >
                    <div className="flex grow shrink-5 items-center" >
                        <img className="rounded-full  " src='/copy.jpg' alt="user" width='32' height='32' />
                        <div className="ml-2" >
                            <p className="text-neutralprimary font-normal leading-6 text-sm " > Lisbon </p>
                        </div>
                    </div>
                </li>

                
            </ul>

        </div>
    )
}