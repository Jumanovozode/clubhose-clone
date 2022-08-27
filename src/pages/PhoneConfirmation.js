import React, { useState } from 'react';
import { Link } from "react-router-dom";
import style from "../style/phoneConfirm.module.css"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


function PhoneConfirmation() {

    const [value, setValue] = useState();
  return (
    <div className={style.PhoneConfirmContiner}>
      <Link exact to="/" className={style.primaryBtnss} >
            
          <img src='https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png' alt=''/>
      </Link>
      <h1>Enter Your Phone</h1>
      <PhoneInput international defaultCountry='US' value={value}/>
      <p>By entering  your number , you`re aggering to our   {""}
      <span>
          Terms of Service and Privacy Policy.
      </span>
      Thanks!</p>
      <div className='d-flex mt-3'>
      
      <Link exact to="/code_confirm" className='btn btn-primary primaryBtns d-flex align-items-center rounded-pill p-3'>
        Next           <img src='https://static.thenounproject.com/png/2354422-200.png' style={style.img} alt=''/>

      </Link>
      </div>
      
  </div>
  );
}

export default PhoneConfirmation;
