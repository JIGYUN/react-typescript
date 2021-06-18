import { useObserver } from 'mobx-react';
import  UseStore  from '../store/UseStore';
import ChatItem from './ChatItem';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ChatList = () => {

  const classes = useStyles();

  const {
    chat: { chatData },
  } = UseStore(); 

  return useObserver(() => (
    <List className={classes.root} style={{textAlign:"center",alignItems:"center",top:"145px",paddingBottom:"60px"}}>
      {chatData.map((v) => (  
        <ChatItem data={v} key={`chatData_${v.no}`} /> 
      ))}
    </List>
  ));
};

export default ChatList;