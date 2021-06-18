import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import UseStore from '../store/UseStore';
import { ChatData } from '../service/ChatService';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

interface Props {
  data: ChatData; 
}

const ChatItem = ({ data }: Props) => {
  const classes = useStyles(); 

  const { chat } = UseStore();

  const removeItem = () => {
    // chat.removeChat(data.no);
  }; 

  const checkItem = (e) => {
    let useYn: string = "";
    if(e.target.checked){
      useYn = "Y";
    } else {
      useYn = "N";
    }
  };

  return (
    <ListItem alignItems="flex-start">
    <ListItemText
        primary={data.sender}
        secondary={
        <React.Fragment>
            {data.data}
        </React.Fragment>
        }
    />
    </ListItem>
  );
};

export default ChatItem;