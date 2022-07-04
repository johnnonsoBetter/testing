import React from 'react'

const NetworkList = () => {

    return (
        <div className="my-1" >
            <ul >
                <Network />
                <Network />
                <Network />
                <Network />
                <Network />
                <Network />
            </ul>
        </div>
    )
}


const Network = () => {

    return (
        <li className="my-3 bg-tpblack p-4 rounded-lg" >
            <a href="#" className="flex  items-center" >
                <div className="flex items-center grow shrink-5 " >
                    <img className="rounded-full  " src='/meta.png' alt="user" width='32' height='32' />
                    <div className="ml-2" >
                        <p className="text-neutralmedium font-normal leading-6 text-sm " > Paityn Vetrovs  </p>
                    </div>
                </div>

                <div className="flex " > 
                   <img  width='12' height='12' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAApVBMVEVHcEwefFcioG4cd1QvkG4NbkUXd1FJgHI4c2Mim2q1u8WtscEnq3cviWofn2sLbkXb3ebP0dyfpbc5jnKdqrQVd1Ctr7+jp7ni4uvP0Nvh4efd3eQjrnUrt34uuoLm5u34+fzv7/QbpWwZoWgTkFsPiFUns3ogqnAVnGQMgk8JfEsjn20zvogblGMEd0UqrnlNtotdo4bL0tbu9/V7yamb1r9JmXeL3rMTAAAAGnRSTlMAMp9Daa7cGQnx/Fq9zNfs5no4mcuO5KOrsYCXcbgAAAMQSURBVFjD7ddrU6MwFAZgbiXQ26q1624I0IANbRHr0tX//9M2CZBboaLuzM7O9KhfdHz65iQkwbKuda1r/ccVsPoaAWzPc+a8HMfzXPApD3jOkjzRSpI4JgShLAzvf9zOwMeG4679x6o8qlCR5a+bDb75CBasD/vtObSjEKVwSrG7UcN0v12EcJrC94MFNhiEfguIUtHNzc9hjLY49Cz7AnQSEIyiBrszpjMArrPc7XZrCSUtFJ8lgoxpa+pP1nR12KxctmKWZZ5TyLGAb0BtoheZSIHSev982LN/CMOQJE8JYTPcD8USapudKonqbQM97nI0AMUCIjqUKhAcguYWmOgQ0aEUa4kGoaUVqFCsJ8Kb80TVexDSh5a/nJqhYR2KQgEVxyTph+jvGcS63UBi1mAvRGIJhZZlJiIS6ml29KYkop3ohZI2kp4Id4lqBkEFQh2Um4nModFIqdEj+ItC28tQ8iQTFRmDcNNstUcjIHIONetIeUZgA+1HQrECmYlSLVHcBx07iPC/cuhk9MhIRJrPzKlUCohNppy2wR5piUZDZ7MGVShTofAidMLmhjQWio1E5tBg79CYJKGSLfg2Eoc2YxIRCQUSEmProG6L7E90ATITYWw+/jqE+iEiIolE5tCMRIgMQXGXCGW/JQTTaCCRhJZizy4REWPrIGwcbLB7aB85VHRQxiH/HIr1RGn/0z8IHbVE7BJxElskFM/aWy+UzVWIMKrb2V4HErVQ1UCIFAVv0rw7+6lUlm/0i33Tyl83PUctbPZs0SMkhuZwiO4L1WKx8ujtgP54q9Vi4U/pDGF8MhPxU4Qm2jUQLZ4oc+j96PnZn/DbZ6BcVuzZ7cP3aV1HqXqMQAGJRIWE/LXdd7cLLHA3o9i05oB60ooeyUSeBdwLtzqO3TOsbhPxs1+uow6qvDHXVTB7aDGY1tuD3qMCFXlVLUZdfunA2Sg5Nj1oPUKoLCnjfeRGHnDsns7NgQ+uWTFhuFi54BMvK8D11pOJz2pBV8zKs8FX3n0AKxsEf+U96vouea1r/ZP6A6IWTYeY83huAAAAAElFTkSuQmCC' alt='pics' /> 
                    <img className="mx-1" width='12' height='12' src='data:image/png;base64,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' alt='pics' />  
                     <img width='12' height='12' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAELUExURUdwTABZUsGjAABqYgBkXcChABBuYcmvAb+iArYFMgAAAAZoYcKoAL6iAAByaQBoYcSrAMSrAABsZcSrAABwaMauBgBkXMSrAEpKSry/vcK/rQAAAPziAPzdAAB8dAB0avvZANsMQwBsZdUCMAB4btcENQCBeQOGfrQEKQBZUr0HNtS5AOzv7OPGAh0QDd3d3vTPAMQPQ8vIxv/82ra2ttscLd4+JSknJOBmFlFYWnl5eaOiouyNC/3jG6HOylGfmY+PkHK0r/3xlTc2NvOxBJ0DJUVCQlsADv/5uf3pScfh3yd2dT4CCIo6U4IAGLeiYf/vdp56ArAnTuTJSFo+DXRJX8J1iNnOcuZlNk3ofygAAABOdFJOUwB+17X9GhP9/n19bkF90yu+a5ORSn7bpn19ff///////////////////////////////////////////////////////////////////ntq5E4AAAStSURBVFjD7djZVupIFAZgmWNjy4ynmwQCBEWGEGJIAijz4IDidPT936T3rqSSCqANd+fCH8GJfP67KrBWPDr6yU/+4ITtHHhYLOYKsXQ0mQyc2gkEkr5oOh3bRwynfVmfDaaBkAoFCe6YUgk+4CGbPQ0ko+nYN144Fg1kLy99BEye5iUJP/LnJHkImhYHgYI+4oW9yxCLJlG5RCgcDeBxQFwwOb+wReRKpWApCCllycS+KMTnSwYC2WAQjCA++o6OH7uFvAdBxXJoP2iHvYJMLvGGD0FcBgLV2q+/HzyM5VwwUv6cDsuCuIrWihKo3S4W248MRYwLFyEKjeSmQDemRBsViwzlmQsRhpHym0rB2hGnEaF+562hGOd8q45NFSRX8TbCvHY36uQ36uS36hQYqO1AON/5PmNJBU+frUZWKZfZqWzXgW3chnClthjvIkuFzT47oWIRxvumjsTu1jeNKnB77cLu2bvkUdipSgW3D0DBqBeqkHv74/5+MBiMh0MUPYy0uTzIlB6G2j8MpOvIYKfih6aqrQakdT8Yj4fIedaYYQoPw0FD6/1ioJlJKlVrgM3lnGwsur2RRsB7q1/eqkWVkvQwHA8aDbVn5P4CqGY5HWXWgULzOZaqgGRFNqbdXl8j/XDiMTSEwKfB4B4qa70pPs2BanNTUPTacjlHBlJd5diQfn2cmJAgtFSt31sY9u8pBIe98PzLSp5XaGrL3I7IhjFdQKaG4fm5DVXl3Oo9wsmragdDoPJu6YtYUGWZW+ovhvxyPZvNlJlpQZXy8lBonpPN2YssrydvPK84Trn8dBikwwK9rY1ev6uqzZlur1G5fIgEUNVsvr83+9OFpva72rrj1MFU5QOgmm7WI4vpVJ62+osP6hDqST6kEexa510etTSt1eotanQqqLM6aLERmhvTfktVPz8/35c16uxfx4Gqq956/bZ+E3jBhFPbqnPIWWRDtdWKE/mZrl+L/HW5dngdCi1z8xk4sMamonSQqTwe6Bi/EJo/6Yp1+pQ71zo4RZW8JEe97tTYQ5S7I+1fhCoV03Yg0Eh/e55Mbm+vrq7gRa5q4H3DyYuR2lDXGRvSrXOQUKbCW7m5u3t+RhDfdkg/2QPK+E7ValxN7urc3xbUcV4TMJzAe4PehHDWm1B/hOmT986r28ndjShGKOS+KPQZvxU4K4AjHkyMI2NubyfPdzeCIIoUqiJjO85YjkAUAUIeBEJiyLciYRjIcUR+R4jCu5ZFkLsoso2cPtciv6OQrWxEJM5mI9sRNgzaRvC2cSwntNHmdgmOJji1tuqIO6AKcbam2t3DtUTHYhqxjjWVQBdI+J86XmjzNKRt+C/biDvXiFkfsrPCV7sl2tsl7m5kgiMqSrPZrNuBL5uKooj79FGaFDLRqNcj9UiE3N0QUsHjvloeBRmOSyCkYwU4yh8/S2UyiUQik0mlzuJxP+ORgqIrUqSOChdPhBDiQImnEiehEHsRFYKcJDJncT8XgWe7IA3+cVT8qRM88LjKReKJk9CXV3bAnSRS0I+jiXAR+qU/nqKHHgO4z1Ur8TIwsd8OrAP8/TDzhEOvn0Mk29ekP/9Z+MkflP8AUjnSE4WZ58sAAAAASUVORK5CYII=' alt='pics' />
                </div> 
               
            </a>
        </li>
    )
}

export default NetworkList


