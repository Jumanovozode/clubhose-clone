import React from 'react';
import style from "../style/phoneConfirm.module.css"
import { Link } from "react-router-dom"

function CodeConfirm() {
  return (

    <div className={style.PhoneConfirmContiner}>
         <Link exact to="/invite" className={style.primaryBtnss} >
            
            <img src='https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png' alt=''/>
        </Link>
        <div className='text-center'>
            <h1 style={{width: '100%', maxWidth: '200px', marginBottom: '1em'}}>Enter the code we just texted you </h1>
             <input type="text" style={{width: '100%',border:'none',outline:'none',textAlign:'center', }}/>
            <p className='mt-2'>Didn`t recieve it? <span>Tap to resend.</span></p>
        </div>
        <Link exact to="/allow-notification" className='btn btn-primary primaryBtns d-flex align-items-center rounded-pill mt-3 p-3'>
        Next           <img src='https://static.thenounproject.com/png/2354422-200.png' style={style.img} alt=''/>

      </Link>
    </div>
  );
}

export default CodeConfirm;
