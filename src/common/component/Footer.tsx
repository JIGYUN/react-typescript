import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link, Route, BrowserRouter as Router, useHistory } from "react-router-dom";


const Footer = (props) => {

  const useStyles = makeStyles({ 
    root: {
      position: "fixed",
      bottom: 0,
      zIndex:12
    },
  });

  const classes = useStyles();
  const [value, setValue] = React.useState(props.highlight);

  const history = useHistory();

  const handleChange = (event, newValue) => {
    if (newValue == "chat"){
      history.push("/chat");
    } else if (newValue == "todo") {
      history.push("/todo");
    }
    setValue(newValue); 
  };
  
  return (
    <div style={{textAlign:"center",alignItems:"center",display: "flex",justifyContent:"center"}}>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="chat" value="chat" icon={<RestoreIcon />}/> 
        <BottomNavigationAction label="todo" value="todo" icon={<FavoriteIcon />} />  
        <BottomNavigationAction label="login" value="login" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default Footer;