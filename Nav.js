import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';

import './Nav.css'
function Nav() {
    const[show,handleShow] = useState(false);
const history = useHistory();
    const transition=()=>{
        if(window.scrollY >100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }
    useEffect(()=>{
          window.addEventListener("scroll",transition);
          return () => window.removeEventListener("scroll",transition);
    },[])
    return (
        <div className={`nav ${ show && 'nav_black'}`}>
        <div className="nav_cont">
        <img className="logo" onClick={history.push('/')} src="https://pngimg.com/uploads/netflix/netflix_PNG12.png" alt="" />
            <img className="ava" onClick={()=>history.push('/profile')} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png" alt="" />
        </div>
        
        </div>
    )
}

export default Nav
