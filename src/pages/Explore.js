import React from 'react';
import style from '../style/explore.module.css'
import {Input} from "antd";

import { DownOutlined, FireOutlined } from '@ant-design/icons'
import data from '../data/Explore.json'
import { Button } from 'react-bootstrap';
import SubHeader from '../components/SubHeader';

function Explore() {
    const { people, conversation, description } = data;
  return (
      
      <div className={style.exploreContainer}>
          <div className={style.header}>

          <SubHeader pageTitle="EXPLORE"/>
          
              <Input 
              style={{
                  backgroundColor: "#f4f4f4",
                  borderRadius: "0.8em",
                  padding : "0.5em 1em",
                  border: "none",
                  boxShadow: "none",

              }} 
              size="large" 
              placeholder='Find People and Club'
              prefix={<img src="https://snipstock.com/assets/cdn/png/dfeabc324af1b00a77d620572e39961a.png" width="15px" height="15px"  style={{objectFit: "contain"} }/>}> 
              
              </Input>

          </div>
        <h6 className={style.hhhh}>PEOPLE TO FOLLOW</h6>
        <div className={style.peopleContainer}>
            {people.map((item) => ( 
                <div>
                    <div className={style.flex}>
                        <img src='https://yt3.ggpht.com/ytc/AKedOLSELFxKHM8XLpX-cqP0wSRIR0_wzeTAXrsuvgf2TA=s900-c-k-c0x00ffffff-no-rj'/>
                            <div className={style.margin}>
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                                </div>
                        </div>
                        <Button className='border border-primary border-3'>
                            Follow
                        </Button>
                        
                    </div>
            ))}
            {/* <Button className={style.showMore}>
                Show More People <DownOutlined/>
            </Button> */}
            {/* <h2>DUMMY TEXT</h2> */}
        </div>
        <h6>FIND CONVERSATION ABOUT ...</h6>
                        <div className='row mx-0'>
                            {conversation.map((item) => (
                                <div className='col-6 px-2 mb-3'>
                                    <div className={style.conversationcard}>
                                        <h6 >
                                            <FireOutlined/>
                                            {item.title}
                                        </h6>
                                        <p>
                                            {item.discription}
                                        </p>

                                    </div>
                                </div>
                            ))}
                        </div>
      </div>
  )
}

export default Explore;
