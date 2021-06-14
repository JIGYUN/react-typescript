import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import UseStore from '../store/UseStore';
import { TodoData } from '../service/TodoService';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

interface Props {
  data: TodoData; 
}

const TodoItem = ({ data }: Props) => {
  const classes = useStyles(); 

  const { todo } = UseStore();

  const removeItem = () => {
    todo.removeTodo(data.scheduleNo);
  };

  const checkItem = (e) => {
    let useYn: string = "";
    if(e.target.checked){
      useYn = "Y";
    } else {
      useYn = "N";
    }

    todo.checkTodo(data.scheduleNo, useYn);
  };

  return (
    <ListItem role={undefined} button>  
      <ListItemIcon>
        <Checkbox checked={data.useYn == "Y" ? true : false} onClick={checkItem} />
      </ListItemIcon>
      <ListItemText primary={data.title} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={removeItem}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;