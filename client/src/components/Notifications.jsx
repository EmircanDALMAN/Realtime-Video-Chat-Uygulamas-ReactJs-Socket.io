import React, {useContext} from 'react';
import {Button} from "@material-ui/core";
import {SocketContext} from "../SocketContext";

const Notifications = () => {
   const {answerCall, call, callAccepted} = useContext(SocketContext);

   return (
      <>
         {call.isReceivedCall && !callAccepted && (
            <div style={{display: "flex", justifyContent: "center"}}>
               <h2>{call.name } Sizi Arıyor!</h2>
               <Button variant={"contained"} color={"primary"} onClick={answerCall}>
                  Kabul Et
               </Button>
            </div>
         )}
      </>
   )
}

export default Notifications;
