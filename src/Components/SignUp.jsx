import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {

const [Input,setInput]=new useState(
    {
        "name":"",
        "phone":"",
        "email":"",
        "password":"",
        "cnfmpass":""
}
)
const inputHandler=(event)=>{
    setInput({...Input,[event.target.name]:event.target.value})
}
const readvalue=()=>{
    if (Input.password==Input.cnfmpass) {
        console.log(Input)
        let newInput={
            "name":Input.name,
            "phone":Input.phone,
            "email":Input.email,
            "password":Input.password
    }
      axios.post("http://localhost:3030/SignUp",newInput).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status== "success") {
                alert("Registered Successfully")
                 setInput({"name":"","phone":"","email":"","password":"","cnfmpass":""})
            } else {
                alert("Email-id already exist")
                 setInput({"name":"","phone":"","email":"","password":"","cnfmpass":""})
            }
        }
      ).catch(
        (error)=>{
            console.log(error)
        }
      ) 
    } else {
        alert("password and confirm password doesn't match")
    }

}
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={Input.name} onChange={inputHandler} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Phone NO</label>
                        <input type="text" className="form-control" name='phone' value={Input.phone} onChange={inputHandler}/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Email-Id</label>
                        <input type="text" className="form-control" name='email' value={Input.email} onChange={inputHandler} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={Input.password} onChange={inputHandler} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Confirm Passwrod</label>
                        <input type="password" className="form-control" name='cnfmpass' value={Input.cnfmpass} onChange={inputHandler}/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readvalue}>Register</button>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-primary" onClick={readvalue}>Login</button>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp