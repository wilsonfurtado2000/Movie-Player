import React,{useState} from 'react'
import './LoginScreen.css'
import SignIn from './SignIn'
function LoginScreen() {
    const [signIn,setSignIn]  = useState(false);
    return (
        <div className="login">
            <div className="login_back">
                <img 
                className="login_logo"
                 src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                 <button onClick={()=> setSignIn(true)} className="log_but">Sign In</button>
                 <div className="login_grad"></div>
                 <div className="bod">
                 {signIn ? (
                   <SignIn/>
                 ):(
                    <>
                     <h1>Unlimited Films , TV Programmes and More.</h1>
                     <h2>Watch Anywhere , Cancel at any time</h2>
                     <h3>Ready to watch ? Enter your email to create or restart  your membership</h3>
                     <div className="in">
                         <form>
                             <input type="email" placeholder="Email Address" />
                             <button
                             onClick={()=>setSignIn(true)}
                               className="em_but">
                                 GET STARTED
                             </button>
                         </form>
                     </div>
                     </>
                 )}
                    
                 </div>
            </div>
        </div>
    )
}

export default LoginScreen
