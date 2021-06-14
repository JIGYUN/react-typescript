import React from 'react';
import { useObserver } from 'mobx-react';
import  UseStore  from '../store/UseStore';
import TodoItem from './TodoItem';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TodoList = () => {

  const classes = useStyles();

  const {
    todo: { todoData },
  } = UseStore();

  return useObserver(() => (
    <List className={classes.root}>
      {todoData.map((v) => (
        <TodoItem data={v} key={`todoData_${v.scheduleNo}`} />
      ))}
    </List>
  ));
};

export default TodoList;