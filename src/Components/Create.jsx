import axios from 'axios'
import React, { useState } from 'react'

const Create = () => {
    
        const [Input,setInput]=useState(
           {  "Message":"",
        "userId":""
    })
    const inputHandler=(event)=>{
        setInput({...Input,[event.target.name]:event.target.value})
    }
    const readvalues=()=>{
        console.log(Input)
    }
    axios.post("http://localhost:3030/Create",Input).then().catch()
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Id</label>
                        <input type="text" className="form-control" name='userId' value={Input.userId} onChange={inputHandler}/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Message</label>
                    <input type="text" className="form-control" name='Message' value={Input.Message} onChange={inputHandler}/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success"onClick={readvalues}>Create</button>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Create