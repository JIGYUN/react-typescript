import React, { useState } from 'react';
import  UseStore  from '../store/UseStore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const ChatForm = () => {

  const classes = useStyles();

  const { chat } = UseStore();
  const [content, setContent] = useState('');
  const [nickname, setNickname] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    if (content == ""){
      alert("할일을입력하세요");
      e.preventDefault();
      return;
    }

    e.preventDefault();

    chat.addChat(content, nickname);
    setContent("");
  };

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value); 
  };
  
  return (
    <div style={{position:"fixed",zIndex:12,textAlign:"center",alignItems:"center",paddingTop:"60px",backgroundColor:"white"}} >
    <form onSubmit={onSubmit}  >
      <TextField id="standard-basic" label="닉네임" value={nickname} onChange={onChangeNickname} placeholder="닉네임"/>
      <TextField id="standard-basic" label="할일" value={content} onChange={onChangeContent} placeholder="내용"/>
      <Button type="submit" variant="contained" color="primary" startIcon={<SaveIcon />} className={classes.button}>
        등록
      </Button>
    </form>
    </div>
  );
};

export default ChatForm;