import React, { useState } from 'react';
import  UseStore  from '../store/UseStore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import { Link, Route, BrowserRouter as Router, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const LoginForm = () => {

  const history = useHistory();

  const classes = useStyles();

  const { login } = UseStore();
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    if (id == ""){
      alert("아이디를 입력하세요.");
      e.preventDefault();
      return;
    }

    if (pwd == ""){
      alert("비밀번호를 입력하세요.");
      e.preventDefault();
      return;
    }

    e.preventDefault();
    loginProc();
  };
  
  const loginProc = async () => {
    const res = await login.login(id, pwd);
    console.log(res);
    if (res.status == "success") {
      sessionStorage.setItem('id',res.userDetail.id);
      sessionStorage.setItem('name',res.userDetail.name);
      sessionStorage.setItem('idx',res.userDetail.idx);
      alert("로그인이 완료되었습니다.");
      login.isLogin = true;
      history.push("/todo");
    } else {
      alert("가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.");
    }
  }

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onChangePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value); 
  };
  
  return (
    <div style={{position:"fixed",zIndex:12,textAlign:"center",alignItems:"center",paddingTop:"60px",backgroundColor:"white"}}>
    <form onSubmit={onSubmit}>
      <TextField id="standard-basic" label="아이디" value={id} onChange={onChangeId} placeholder="아이디"/>
      <TextField id="standard-basic" label="비밀번호" value={pwd} onChange={onChangePwd} placeholder="비밀번호"/>
      <Button type="submit" variant="contained" color="primary" startIcon={<SaveIcon />} className={classes.button}>
        등록
      </Button>
    </form>
    </div>
  );
};

export default LoginForm;