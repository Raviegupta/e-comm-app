import './CSS/LoginSignup.css'

const LoginSignUp = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="text" name="" id="" placeholder='Your name' />
        <input type="email" name="" id="" placeholder='Email Address' />
        <input type="password" name="" id="" placeholder='Password' />
      </div>
      <div className="loginsignup-agree">
        <input type="checkbox" name="" id="" />
        <p>By continuing, i agree to the terms of use & privacy policy.</p>
      </div>
      <button>Continue</button>
        <p className="loginsignup-login">Alraedy have an account? <span>Login here</span></p>
      </div>
    </div>
  )
}

export default LoginSignUp