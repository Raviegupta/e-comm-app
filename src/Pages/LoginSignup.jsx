import { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignUp = () => {

  const [state, setState] = useState('login');
  const [formData, setFrormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const changeHandler = (e) => {
    setFrormData({...formData, [e.target.name]:e.target.value})
  }

  const signup = async () => {
    console.log('Sign Up function is called')
    console.log(formData);

    let responseData;
    await fetch('http://localhost:4000/signup', {
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData)
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace('/');
    }else{
      alert(responseData.errors)
    }
  }

  const login = async () => {
    console.log('login function is called')
    console.log(formData);

    let responseData;
    await fetch('http://localhost:4000/login', {
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData)
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace('/');
    }else{
      alert(responseData.errors)
    }
    
  }
  
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
      <h1>{state}</h1>
      <div className="loginsignup-fields">
        {
          state==='Sign Up'? <input type="text" name="username" value={formData.username} onChange={changeHandler} id="" placeholder='Your name' /> : <></>
        }
        
        <input type="email" name="email" value={formData.email} onChange={changeHandler} id="" placeholder='Email Address' />
        <input type="password" name="password" value={formData.password} onChange={changeHandler} id="" placeholder='Password' />
      </div>
      <div className="loginsignup-agree">
        <input type="checkbox" name="" id="" />
        <p>By continuing, i agree to the terms of use & privacy policy.</p>
      </div>
      <button onClick={()=>{state==='Sign Up'? signup() : login() }}>Continue</button>
      {
        state==='Sign Up'? <p className="loginsignup-login">Alraedy have an account? <span onClick={()=>{setState('login')}}>Login here</span></p> : <p className="loginsignup-login">Create an account? <span onClick={()=>{setState('Sign Up')}}>Click here</span></p>
      }
      </div>
    </div>
  )
}

export default LoginSignUp