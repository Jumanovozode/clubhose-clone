import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  style from "../style/welcome.module.css"
import { Link } from "react-router-dom";
function Welcome() {
  return (
  <div className={style.WelcomeContainer}>

            <h1>Welcome!</h1>
            <div className={style.WelcomeInfo}>
                <p>We`re working hard to get clubhouse ready for everyone! While we wrap up the fishing touches, we`re adding people gradually to make sure nothing breaks</p>
                <p>
                    Anyone can join with an invite from an existing user - or resorve your username and we`ll text you if you have a friend on the app who can let you in. We are so greatgul you`re here and can`t wait to have you join!
                </p>
                <p>Paul, Rohan & the Clunhouse team</p>
            </div>
            <div className={style.actionBtn}>
                    <Link exact to="/get_username" className='btn btn-primary rounded-pill text-white primaryBtn d-flex align-items-center mt-5 mb-3'
                    > Get your username{"   "}
                    {/* <img src=''/> */}

                        </Link>
                        <Link exact to="/invite" 
                        
                        className='primaryBtn d-flex align-items-center  text-primary '>
                        Have an invite text? Sign in  
                        </Link>
            </div>

        
  </div>
  )
}

export default Welcome;
