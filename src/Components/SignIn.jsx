import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate=useNavigate()

    const [Input,setInput]=useState(
       { "email":"",
        "password":""
})
const inputHandler=(event)=>{
    setInput({...Input,[event.target.name]:event.target.value})
}
const readvalues=()=>{
    console.log(Input)

    axios.post("http://localhost:3030/SignIn",Input).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="Invalid Password") {
                alert ("Incorrect password")
            } else if(response.data.status=="Invalid Email Id"){
                alert("Invalid Email-Id")
            }
            else{

                let token=response.data.token
                let userId=response.data.userId
                console.log(userId)
                console.log(token)

                sessionStorage.setItem("userId",userId)
                sessionStorage.setItem("token",token)
                navigate("/Create")
            }

        }
    ).catch(
        (error)=>{

        }
    )
}
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email-Id</label>
                            <input type="text" className="form-control" name='email' value={Input.email} onChange={inputHandler} />
                        </div>
                        <div className="col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" className="form-control" name='password' value={Input.password} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readvalues}>SignIn</button>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <a href="/SignUp" className="btn btn-secondary" onClick={readvalues}>New User Click here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn