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

const TodoForm = () => {

  const classes = useStyles();

  const { todo } = UseStore();
  const [content, setContent] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    if (content == ""){
      alert("할일을입력하세요");
      e.preventDefault();
      return;
    }

    e.preventDefault();

    todo.addTodo(content);
    setContent("");
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return ( 

    <form onSubmit={onSubmit} style={{textAlign:"center",alignItems:"center",paddingTop:"60px"}}>  
      <TextField id="standard-basic" label="할일" value={content} onChange={onChangeContent} placeholder="내용"/>
      <Button type="submit" variant="contained" color="primary" startIcon={<SaveIcon />} className={classes.button}  >
        등록 
      </Button>  
    </form>
  );
};

export default TodoForm;