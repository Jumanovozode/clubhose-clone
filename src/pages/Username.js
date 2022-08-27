import React from 'react';
import { Link } from "react-router-dom"
import style from "../style/username.module.css"

function Username() {
  return (
      <div>
        <Link exact to="/" className={style.backBtn} className='primaryBtnss'>
            
            <img src='https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png' alt=''/>
        </Link>
          <div className={style.ozod}>
      
      <div className='btn btn-primary bodom text-white'>
      <Link exact to="/get_username"> 
            <h1>Ozodbek</h1>
      </Link>
      </div>
      
  </div>
      </div>
  );
}

export default Username;
