import React from 'react';
import { Link } from 'react-router-dom'
import style from '../style/header.module.css' 

function Header() {
  return (
      <div className={style.Header}>
          <Link exact to="/explore">
                <img src='https://cdn3.iconfinder.com/data/icons/flaticons-1/24/flaticon_search-512.png'  alt=''/>
          </Link>
        <div className={style.nav_items} >
        {/* <Link exact to="/friends_invite"> */}
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ph1PPA8jk7m7r1BqzA3_FJ9rcDRJpom56MV-rn0m_N-6MQmNFdYpq9WKQI3nPk7fVb0&usqp=CAU'  alt=''/>
          {/* </Link>
        
        <Link exact to="/upcoming"> */}
                <img src='https://flyclipart.com/thumb2/calendar-png-icon-free-download-592849.png'  alt=''/>
          {/* </Link>
       
        <Link exact to="/activity"> */}
                <img src='https://mpng.subpng.com/20181228/svx/kisspng-computer-icons-ios-7-iphone-portable-network-graph-remind-svg-png-icon-free-download-2443-2-onli-5c261c7926a328.3025707815460015291583.jpg'  alt=''/>
          {/* </Link> */}
        
        <Link exact to="/profile">
                <img src='https://yt3.ggpht.com/ytc/AKedOLSELFxKHM8XLpX-cqP0wSRIR0_wzeTAXrsuvgf2TA=s900-c-k-c0x00ffffff-no-rj' style={{borderRadius: '50%',width:'40px', height:'40px',objectFit:'contain'}}  alt=''/>
          </Link>
        </div>
      </div>
  )
}

export default Header;
