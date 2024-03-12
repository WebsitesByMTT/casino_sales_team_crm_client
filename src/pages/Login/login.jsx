"use client"
import React, { useEffect, useState } from 'react'
import './login.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { loginUser } from '../../redux/api/login'
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';

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
            if (storeAuthStates.designation === "bigboss")
                navigate('/acountRecords')

            else if (storeAuthStates.designation === "managerSchema")
                navigate('/acountRecords')

            else if (storeAuthStates.designation === "agentSchema")
                navigate('/firstDepositeEntry')

            else if (storeAuthStates.designation === "tlSchema")
                navigate('/tlDashboard')
        }

    }, [storeAuthStates])

    return (
        <>
            <div className='loginPage'>

                <form className='loginForm' onSubmit={(e) => handleSubmit(e)}>
                    <div className='loginTitle'>Login</div>
                    <div className='userLoginFields'>
                        <PersonIcon style={{ fontSize: "15px", color: "black" }} />
                        <input className="loginInput" required value={email} type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value.trim())} />
                    </div>
                    <div className='userLoginFields'>
                        <LockOpenIcon style={{ fontSize: "15px", color: "black" }} />
                        <input className="loginInput" required value={password} type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value.trim())} />
                    </div>

                    <br />
                    <button className='loginButton' type='submit'>Login</button>
                </form>
            </div>
        </>
    )
}
export default Login