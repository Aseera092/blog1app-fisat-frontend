import React, { useState } from 'react'

const Viewall = () => {
    const [data, setData] = useState(
        [
            {
                "_id": "669cf9f6fc168ad49cb1888f",
                "userId": "669c0592afd8b2a206008d4a",
                "Message": "anu@gmail.com",
                "__v": 0,
                "postedDate": "2024-07-21T12:27:56.617Z"
            },
            {
                "_id": "669cfc351b5c634d8a36576f",
                "userId": "669c0592afd8b2a206008d4a",
                "Message": "text msg",
                "postedDate": "2024-07-21T12:16:53.357Z",
                "__v": 0
            },
            {
                "_id": "669cfd5626113fbf699866e0",
                "userId": "669c0592afd8b2a206008d4a",
                "Message": "text msg",
                "postedDate": "2024-07-21T12:21:42.416Z",
                "__v": 0
            }
        ]

    )
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
                        <div className="row g-3">
                            {data.map[
                                (value,index)=>{
return
                                }
                            ]}
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">\

                                <div class="card mb-3" style="max-width: 540px;">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src="..." class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall