import React, { useState } from 'react';
import  UseStore  from '../store/UseStore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import { Link, Route, BrowserRouter as Router, useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import GoogleLogin from 'react-google-login';

const useStyles = makeStyles((theme) => ({
  paper: { 
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
  },
  googleButton: {
    margin: theme.spacing(0, 0, 2),
    width: "100%",
    height:"35px",
    borderRadius: "4px",
    background: "#db3236",
    color:"white",
    border:"0px transparent",
    textAlign: "center",
  },
}));

const LoginForm = () => {

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          JS COMPANY
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

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

  const googleLoginProc = async (data) => {
    console.log("구글 로그인 시작"); 
    console.log(data.profileObj);
    const googleId = data.profileObj.googleId;
    const googleName = data.profileObj.googleName;
    const googleEmail = data.profileObj.googleEmail;
    const res = await login.googleLogin(googleId, googleName,googleEmail);
    if (res.status == "success") {
      sessionStorage.setItem('id',res.userDetail.googleId);
      sessionStorage.setItem('name',res.userDetail.googleName);
      sessionStorage.setItem('idx',res.userDetail.googleEmail);
      alert("구글 로그인이 완료되었습니다.");
      login.isLogin = true;
      history.push("/todo");
    } else if (res.status == "insert") {
      sessionStorage.setItem('id',res.userDetail.googleId);
      sessionStorage.setItem('name',res.userDetail.googleName);
      sessionStorage.setItem('idx',res.userDetail.googleEmail);
      alert("구글 회원가입이 완료되었습니다.\n 로그인후 메인페이지로 이동합니다.");
      login.isLogin = true;
      history.push("/todo");
    } else {
      alert("구글 로그인이 실패하였습니다.");
    }
  }

  // Google Login
  const responseGoogle = (res) => {
      googleLoginProc(res);
  }

  // Login Fail
  const responseFail = (err) => {
      console.error(err);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="아이디"
            name="email"
            autoComplete="email"
            autoFocus
            value={id} onChange={onChangeId} placeholder="아이디"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            autoComplete="current-password"
            value={pwd} onChange={onChangePwd} placeholder="비밀번호"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="자동로그인"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"   
            className={classes.submit}
          >
            로그인
          </Button>
          <GoogleLogin
              clientId="442434028472-bpigre700o77ehd0p9g4g8qhf4bobfjs.apps.googleusercontent.com"
              buttonText="구글 로그인"
              onSuccess={responseGoogle}
              onFailure={responseFail}
              className={classes.googleButton}
          />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                비밀번호 찾기
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"아이디가 없다면? 회원가입하세요"}
              </Link> 
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default LoginForm;