import React,{useState} from 'react'
import './Register.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'


/* import our assets*/
import video from '../../LoginAssets/videoplayback.mp4'
import logo from '../../LoginAssets/Logo.png'

/* imported icons*/
import {FaUserShield} from 'react-icons/fa6'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
import {MdMarkEmailRead} from 'react-icons/md'

const Register = () => {
// useState to hold our inputs
    const [ email, setEmail] = useState('') 
    const [ userName, setUserName] = useState('') 
    const [ password, setPassword] = useState('') 
    const navigateTo = useNavigate()

    //onclick let us get what the users hos entered
    const createUser = (e)=>{
        e.preventDefault()
        //we shall require Axios create an AOI that connocts to the server lest
        Axios.post('http://localhost:3002/register',{
            // create vartable to send to the server througth the route
            Email: email,
            UserName: userName,
            Password: password
        }).then(()=>{
            navigateTo('/')

            setEmail('')
            setUserName('')
            setPassword('')
        })
    }

    return (
        <div className='registerPage flex'>
        <div className="container flex">

            <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
                <h2 className='title'>Ер бусын бүтээгдэхүүн бий болгож борлуулах</h2>
                <p>Abopt the jjkkjbjhk</p>
                </div>

                <div className="footerDiv flex">
                    <span className="text">Have an account?</span>
                    <Link to={'/'}> 
                    <button className='btn'>Login</button>
                    </Link>
                </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo Image" />
                    <h3>Та бүртгүүлнэ үү!</h3>
                </div>

                <form action="" className= 'form grid'>
                    
                    <div className="inputDiv">
                        <label htmlFor="email">Email</label>
                        <div className="input flex">
                            <MdMarkEmailRead className='icon'/>
                            <input type="email" id='email' placeholder='Enter Email'onChange={(event)=>{
                                setEmail(event.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                            <FaUserShield className='icon'/>
                            <input type="text" id='username' placeholder='Enter Username' onChange={(event)=>{
                                setUserName(event.target.value)
                            }}/>
                        </div>
                    </div>

                    <div className="inputDiv">
                        <label htmlFor="password">Password</label>
                        <div className="input flex">
                            <BsFillShieldLockFill className='icon'/>
                            <input type="password" id='password' placeholder='Enter Password' onChange={(event)=>{
                                setPassword(event.target.value)
                            }}/>
                        </div>
                    </div>

                    <button type='submit' className='btn flex' onClick={createUser}>
                        <span>Register</span>
                        <AiOutlineSwapRight className='icon'/>
                    </button>

                    <span className='forgotPassword'>
                        Forgot your password? <a href="">Click Here</a>
                    </span>

                </form>
            </div>
        </div>
        </div>

    
    )
}
export default Register