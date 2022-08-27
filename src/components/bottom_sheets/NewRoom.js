import React, { useState } from 'react';
import style from "../../style/roomDetail.module.css"
import { AiOutlineFile, AiOutlinePlus } from 'react-icons/ai';
import  { BsMicMuteFill, BsMicFill  } from 'react-icons/bs'
import item from '../../data/NewRoom.json'

export default function NewRoom(props) {
    const [micMuteVisible, setMicMuteVisible] = useState(false);
    const [itemsVisible, setItemsVisible] = useState(true) 
    const card = props.cardDetail;
    return (
        <>
            <div className={style.roomDetailContainer}>
                    <div className={style.head}>
                        <div className={style.flex}>
                            <a href='#' onClick={() => {
                                props.setSheetVisible(false);
                            }}>
                                <img src="https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png" className={style.arrow_icon} alt=''/>
                            </a>
                            <span>Hallway</span>
                        </div>
                        <div>
                            <AiOutlineFile/>
                            <img src='https://yt3.ggpht.com/ytc/AKedOLSELFxKHM8XLpX-cqP0wSRIR0_wzeTAXrsuvgf2TA=s900-c-k-c0x00ffffff-no-rj' className={style.profile_img}/>
                        </div>
                    </div>
                    <div className={style.roomDetailCard}>
                        <div className={style.align} style={{ padding: "0.5em 1em"}}>
                            {card.members.map((item) => (
                                <div className={style.memberContainer}>
                                    {micMuteVisible ?  (
                                        <div className={style.audio_icon}>
                                                 <BsMicMuteFill/>
                                            </div>
                                    ) : (
                                        ''
                                    )} 

                                      <img src='https://cdn-images-1.listennotes.com/podcasts/nazdumanskyy-wngF67-oYP9-jk6zdGEn1gh.1400x1400.jpg' />
                                      <p>
                                          <span>
                                              *
                                          </span>
                                          {item.first_name}
                                      </p>
                                </div>
                            ))}
                            
                               
                    </div>

            </div>
            <div className={style.footer}> 
            <button onClick={() => {
                props.setSheetVisible(false);
            }}> 

                <img src='https://cdn2.iconfinder.com/data/icons/smileys-people-hand-gestures-add-on/48/v-08-512.png'/>
                Leave Quietly

            </button>
            <div>
                <button>
                    <AiOutlinePlus/>
                </button>
                <button>
                    <img src='https://cdn2.iconfinder.com/data/icons/ui-elements-23/50/Exports_hand-stop-ui-512.png'/>
                </button>
                <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
                    {micMuteVisible ? <BsMicMuteFill/> : <BsMicFill/>}
                </button>
            </div>
            </div>
        </div>
        </>
    )
}