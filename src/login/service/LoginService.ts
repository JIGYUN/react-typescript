import { observable } from 'mobx';
import axios from 'axios';
import { Link, Route, BrowserRouter as Router, useHistory } from "react-router-dom";

interface LoginService {
  login: (id: string, pwd: string) => any;
  logout: () => void;
  isLogin: boolean;
}

export const login = observable<LoginService>({
  
  login(id, pwd) {
    const dt = { id: id,pwd: pwd };
    return axios.post('http://localhost:8080/rest/auth/loginProc',dt
    ).then((response: any) => response && response.data || { results: [], totalCount: 0 });
  },
  logout() {
    sessionStorage.clear(); // 모든 데이터 삭제
  },
  isLogin:false,
  
});