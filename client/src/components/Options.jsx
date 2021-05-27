import React, {useContext, useState} from 'react';
import {Button, Container, Grid, makeStyles, Paper, TextField, Typography} from "@material-ui/core";
import {SocketContext} from "../SocketContext";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import {Assignment, Phone, PhoneDisabled} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
   root: {
      display: 'flex',
      flexDirection: 'column',
   },
   gridContainer: {
      width: '100%',
      [theme.breakpoints.down('xs')]: {
         flexDirection: 'column',
      },
   },
   container: {
      width: '600px',
      margin: '35px 0',
      padding: 0,
      [theme.breakpoints.down('xs')]: {
         width: '80%',
      },
   },
   margin: {
      marginTop: 20,
   },
   padding: {
      padding: 20,
   },
   paper: {
      padding: '10px 20px',
      border: '2px solid black',
   },
}));

const Options = ({children}) => {
   const classes = useStyles();
   const {me, callAccepted, name, setName, leaveCall, callEnded, callUser} = useContext(SocketContext);
   const [idToCall, setIdToCall] = useState("");

   return (
      <Container className={classes.container}>
         <Paper elevation={10} className={classes.paper}>
            <form className={classes.root} noValidate autoComplete={"off"}>
               <Grid container className={classes.gridContainer}>
                  <Grid item xs={12} md={6} className={classes.padding}>
                     <Typography gutterBottom variant={"h6"}>Hesap Bilgisi</Typography>
                     <TextField label={"İsim"} value={name} fullWidth
                                onChange={(e) => setName(e.target.value)}/>
                     <CopyToClipboard text={me} className={classes.margin}>
                        <Button variant={"contained"} color={"primary"} fullWidth
                                startIcon={<Assignment fontSize={"large"}/>}>
                           ID'yi Kopyala
                        </Button>
                     </CopyToClipboard>
                  </Grid>
                  <Grid item xs={12} md={6} className={classes.padding}>
                     <Typography gutterBottom variant={"h6"}>Arama Yap</Typography>
                     <TextField label={"Aranacak ID"} value={idToCall} fullWidth
                                onChange={(e) => setIdToCall(e.target.value)}/>
                     {callAccepted && !callEnded ? (
                        <Button variant={"contained"} color={"secondary"} fullWidth onClick={leaveCall}
                                className={classes.margin}
                                startIcon={<PhoneDisabled fontSize={"large"}/>}>Aramayı Bitir</Button>
                     ) : (
                        <Button
                           variant={"contained"} color={"primary"} fullWidth className={classes.margin}
                           onClick={() => callUser(idToCall)}
                           startIcon={<Phone fontSize={"large"}/>}
                        >Ara</Button>
                     )}
                  </Grid>
               </Grid>
            </form>
            {children}
         </Paper>
      </Container>
   )
}

export default Options;
