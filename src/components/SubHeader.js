import React from 'react';
import style from '../style/explore.module.css'
import { withRouter, Link} from 'react-router-dom'

function SubHeader(props) {
  return (
      <div className={style.headd}>
          <Link to="/home">
          <img src='https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png' alt=''/>

          </Link>
        <h1>{props.pageTitle}</h1>
      </div>
  )
}

export default SubHeader;
