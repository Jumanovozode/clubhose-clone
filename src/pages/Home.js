import React, { useState } from 'react';
import DailyInfoCard from '../components/DailyInfoCard';
import Header from '../components/Header';
import RoomInfoCard from '../components/RoomInfoCard';
import style from '../style/home.module.css';
import  {  AiOutlinePlus } from "react-icons/ai"
import { BsGrid3X3Gap } from "react-icons/bs"
import data from "../data/roomCard.json"
import BottomSheet from "../components/BottomSheet"
import newRoomData from "../data/NewRoom.json"

function Home() {
      const [itemsVisible, setItemsVisible] = useState(true);
      const [sheetVisible, setSheetVisible] = useState(false);
      const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
      const [loaderVisibility, setLoaderVisibility] = useState(false);
      const [cardId, setcardId] = useState(1);
  return ( 
      <>
      {loaderVisibility ? (
        <div style={{
          position: "fixed",
          top: "0",
          right:"0",
          bottom:"0",
          
          alignItems: "center",
          justifyContent:"center",

        }}>
            <img src='https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif' alt=''/>
        </div>
      ) : (
        ""
      )}
          <Header/>
          <div className={style.home_container}>
          <DailyInfoCard/>
          <RoomInfoCard />
          </div>
          <div className={style.action_Btn}>
            <button onClick={() => setSheetVisible(true)}>
              <AiOutlinePlus className={style.btn}/>
              Start a room
            </button>
            <button>
              <BsGrid3X3Gap/>
            </button>
          </div>
          <BottomSheet 
            sheetTitle="start room" 
            setSheetVisible={(item) => setSheetVisible(item)}
            sheetVisible={sheetVisible}
            cardDetail={data.find((item) => item.id == cardId)}
            setItemsVisible={(item) => setItemsVisible(item)}
            setSheetCreateRoom={(item) => {
              setLoaderVisibility(true);
              setTimeout(() => {
                setSheetCreateRoom(item);
                setLoaderVisibility(false);
              }, 100)
            }}
          >

          </BottomSheet>
          <BottomSheet 
          sheetTitle="new room"
          setSheetVisible={(item) => setSheetCreateRoom(item)}
          sheetVisible={sheetCreateRoom}
          cardDetail={newRoomData}
          setItemsVisible={(item) => setItemsVisible(item)} />
      </>
  )
}

export default Home;
