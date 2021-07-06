import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { auth, provider } from '../firebase'
import { login } from '../redux/actions/Login'
import './Login.css'

const Login = () => {
const dispatch=useDispatch()


    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({
                displayName:user.displayName,
                email:user.email,
                photoUrl:user.photoURL
            })) 
        })
    }
    return (
        <div className="login">
           <div className="login-container">
           <img src="https://teknosafari.net/wp-content/uploads/2020/10/google-gmailin-logosunu-degistirdi-958584.jpg.jpg" alt=""/>
           </div>
           <Button style={{width:200}} variant="contained" color="primary" onClick={signIn}>Login</Button>
        </div>
    )
}

export default Login
