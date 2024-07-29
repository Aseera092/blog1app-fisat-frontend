import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const Create = () => {
    const[Input, setInput] = useState({
        "Message": "",
        "userId": sessionStorage.getItem("userId")})
    const inputHandler=(event)=>{
        setInput({...Input,[event.target.name]:event.target.value})
    }
    const readvalues=()=>{
       console.log(Input) 
       axios.post("http://localhost:3030/Create",Input,{headers:{"token":sessionStorage.getItem("token"),"Content-Type":"aaplication/json"}}).then(
        (response)=>{
            console.log(response)
if (response.data.status== "success") {
    alert("Posted succesfully")
} else {
    alert("Something went wrong")
}
        }
       ).catch(
        (error)=>{console.log(error)}
       )
    }
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Post Message</label>
                                <textarea name="Message" value={Input.Message} onChange={inputHandler} className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readvalues} className="btn btn-success">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create