import React from 'react';
import { AiOutlineInstagram, AiOutlinePlus, AiOutlineSetting, AiOutlineTwitter } from 'react-icons/ai';
import { BsAt, BsUpload } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import exploreStyle from '../style/explore.module.css'
import style from "../style/profile.module.css"

function Profile() {
  return (
      <>

        <div style={style.profileContainer}>
            <div className={exploreStyle.header}>
                < div className={style.style}>
                <div className={`${exploreStyle.headd} text-right mb-0`}>
                    <Link to="/home" >
                    <img src='https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png' className={exploreStyle.arrow_icon} alt=''/>

                    
                    </Link>
                    <div className={style.actionBtn} >
                        <BsAt className={style.margin}/>
                        <BsUpload  className={style.margin}/>
                        <AiOutlineSetting  className={style.margin}/>



                    </div>
 
                </div>
            </div>
            <div className={style.ssss}>

            <img src='https://yt3.ggpht.com/ytc/AKedOLSELFxKHM8XLpX-cqP0wSRIR0_wzeTAXrsuvgf2TA=s900-c-k-c0x00ffffff-no-rj' className={style.profile_image} />
            <h4>Rafeh Qazi</h4>
            <p>@cleverqazi</p>
            <div className={style.follow}>
                <p>
                    <span>0</span>
                    follower
                </p>
                <p>
                    <span>51</span> following
                </p>
                </div>
                <button>
                    Add a bio
                </button>
                <div className={style.bottom}>
                    <button className='mb-0 mr-3'>
                    <AiOutlineTwitter/> Add Twitter


                    </button>
                    <button className='mb-0'>
                    <AiOutlineInstagram/> Add Instagram


                    </button>
                </div>

            
        </div>
        <div className={style.nominated}>
        <img src='https://yt3.ggpht.com/ytc/AKedOLSELFxKHM8XLpX-cqP0wSRIR0_wzeTAXrsuvgf2TA=s900-c-k-c0x00ffffff-no-rj'  />
        <div>
            <p>Joined 14-July-2021</p>
            <p>Nominated by <span>Anton Alarcon</span></p>
        </div>
        </div>
        <p>Member of </p>
        <button className={style.addMemberBtn}>
            <AiOutlinePlus/>

        </button>
        </div>
        </div>
       </>
  )
}

export default Profile;
