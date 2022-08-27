import React, {useState, useEffect} from "react"
import style  from "../style/roomCard.module.css"
import data from "../data/roomCard.json"
import { BsChatDots, bsChatDots, bsChatDotsFill, bsFillMessage, BsFillPersonFill} from "react-icons/bs"
import {AiFillMessage} from "react-icons/ai"
export default function RoomInfoCard(props) {
    return <><h2></h2>
        {data.map((item) => (
            <div>
                <div>
                    <div className={style.roomCardContainer}>
                        <h6>{item.title}</h6>
                        <h2>{item.sub_title}</h2>
                        <div className={style.roomMembers}>
                            <div>
                                <img src="https://clipartpngfree.com/save/objects/javascript_is_object_man_for.png" />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREB7FC1k3nxOMlqRHPWG-j6mXUcysRIgm1GA&usqp=CAU" />
                            </div>
                            <div>
                                {item.members.map((item) => (
                                    <p>
                                        {item.first_name} {item.last_name} <BsChatDots/>
                                    </p>
                                    
                                ))}
                                <p className="d-flex align-items-center">
                                        <span className="mr-2">1.8</span>
                                        <BsFillPersonFill className="mx-2"/>
                                        <span className="mx-2"></span>{""}
                                        <span className="mr-2">5</span>
                                        
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        ))}
    </>


}  