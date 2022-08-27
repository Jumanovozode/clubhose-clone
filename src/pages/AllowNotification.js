import React from 'react';
import {    Link, } from "react-router-dom"
import style from "../style/phoneConfirm.module.css"


function AllowNotification() {
  return (
      <div className={style.PhoneConfirmContiner}>
          <div className='text-center'>
          <h1 className='mb-4'>Last, important step!</h1>
          <h1 className='mb-3'>Enable notifications to know when people are talking</h1>
          <div className={style.notificationContainer}>
            <div className='p-3'>
                <h1>"Clubhouse" Would Like to Send You Notification </h1>
                <p>Notifications may include alerts, sounds, and icon badges </p>
            </div>
            <div className={style.action_btn}>
                <Link exact to="/" className='text-primary'>
                Don`t Allow 
                </Link>
                <Link exact to="/home" className='text-primary'>
                 Allow 
                </Link>
                
            </div>
            <img src='https://cdn.iconscout.com/icon/free/png-256/click-2939074-2432651.png' alt='' className={style.hand_icon}/>
          </div>
          </div>
            
      </div>
  )
}

export default AllowNotification;
