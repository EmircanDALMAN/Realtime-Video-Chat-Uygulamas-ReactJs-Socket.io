import React, {useContext} from 'react';
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {SocketContext} from "../SocketContext";

const useStyles = makeStyles((theme) => ({
   video: {
      width: '550px',
      [theme.breakpoints.down('xs')]: {
         width: '300px',
      },
   },
   gridContainer: {
      justifyContent: 'center',
      [theme.breakpoints.down('xs')]: {
         flexDirection: 'column',
      },
   },
   paper: {
      padding: '10px',
      border: '2px solid black',
      margin: '10px',
   },
}));

const VideoPlayer = () => {
   const classes = useStyles();
   const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext)

   return (
      <Grid container className={classes.gridContainer}>
         {stream && (
            <Paper className={classes.paper}>
               <Grid item xs={12} md={6}>
                  <Typography variant={"h5"} gutterBottom>{name || "Name"}</Typography>
                  <video className={classes.video} playsInline muted ref={myVideo} autoPlay/>
               </Grid>
            </Paper>
         )}

         {/* Users Video */}
         {callAccepted && !callEnded && (
            <Paper className={classes.paper}>
               <Grid item xs={12} md={6}>
                  <Typography variant={"h5"} gutterBottom>{call.name || "Name"}</Typography>
                  <video className={classes.video} playsInline ref={userVideo} autoPlay/>
               </Grid>
            </Paper>
         )}
      </Grid>
   )
}

export default VideoPlayer;















