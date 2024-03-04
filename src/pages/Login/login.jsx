"use client"
import React, { useEffect, useState } from 'react'
import './login.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { loginUser } from '../../redux/api/login'


const Login = () => {

    const storeAuthStates = useSelector(state => state.user)

    console.log("userSl", storeAuthStates)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(loginUser({ email, password }))

    }

    const checkTokenExist = async () => {

    }


    useEffect(() => {
        checkTokenExist()
        console.log("loginSotrePrint", storeAuthStates)
        if (storeAuthStates.email && storeAuthStates.token) {


            navigate('/acountRecords')
        }

    }, [storeAuthStates])

    return (
        <>
            <div className='loginPage'>
                <form className='loginForm' onSubmit={(e) => handleSubmit(e)}>
                    {/* <PersonIcon style={{ fontSize: "150px", color: "white" }} /> */}

                    <div className='userLoginFields'>
                        {/* <PersonIcon /> */}
                        <input required value={email} className="loginInput" type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value.trim())} />
                    </div>
                    <div className='userLoginFields'>
                        {/* <KeyIcon /> */}
                        <input required value={password} type='password' className="loginInput" placeholder='Password' onChange={(e) => setPassword(e.target.value.trim())} />
                    </div>

                    <br />
                    <button className='loginButton' type='submit'>Login</button>
                </form>
            </div>
        </>
    )
}
export default Login