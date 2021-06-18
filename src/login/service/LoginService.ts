import { observable } from 'mobx';
import axios from 'axios';

interface LoginService {
  login: (id: string, pw: string) => void;
}

export const chat = observable<LoginService>({

  login(id, pw) {
    const dt = { id: id,pw: pw };
    axios.post('http://localhost:8080/rest/schedule/delete',dt
    ).then(res =>{
        console.log(res);
    });
  }

});