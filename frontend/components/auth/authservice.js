
import API from '../../api';

class AuthService {
    constructor(){
        this.loggedIn = false;
    }

    login(body, callback){
        console.log("sende login request", body);
        API.post(`/login`, body)
        .then(res => {
            if(res.status === 200){
                console.log(res);
                localStorage.setItem('user', res.data.username);
                localStorage.setItem('Authorization', res.data.token);
                callback(res);
            }
        })
        .catch(err => {
            console.log(err);
            callback(err);
        })
    }

    logout(){
        localStorage.removeItem('user');
        localStorage.removeItem('Authorization');
    }

    async isLoggedIn(){
        console.log("checke eingeloggt mit token " + localStorage.getItem('Authorization'));

        if(this.hasToken()){
            return new Promise((resolve, reject) => {
                API.get('/user', this.getHeader())
                .then(res => {
                    if(res.status === 200){
                        resolve(true);
                    }
                })
                .catch(err => {
                    console.log(err);
                    localStorage.removeItem('Authorization');
                    localStorage.removeItem('user');
                    resolve(false);
                })
            });
        }
        else {
            console.log("kein token");
            return false;
        }
    }

    register(mailInput, passwordInput, repeatedPasswordInput, successCallback){

        API.post(`/register`, {
            username: mailInput,
            password: passwordInput,
            repeatedPassword: repeatedPasswordInput
        })
        .then(res => {
            if(res.status === 200){
                successCallback(res);
            }
        })
        .catch(err => {
            successCallback(err);
        });
    }

    hasToken(){
        if(localStorage.getItem('Authorization') != null){
            return true;
        }
        return false;
    }

    getHeader(){
        const token = "Bearer " + localStorage.getItem('Authorization');
        return Object.create({
            headers: {
                Authorization: token,
                user: localStorage.getItem('user')
            }
        });
    }
}

export default new AuthService();