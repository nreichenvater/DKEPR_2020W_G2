

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
                localStorage.setItem('user', res.data.user.mail);
                localStorage.setItem('Authorization', res.headers.authorization);
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
        return new Promise((resolve, reject) => {
            resolve(true);
        });
        /*
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
        } */
    }

    register(mailInput, passwordInput, repeatedPasswordInput, successCallback){

            API.post(`/register`, {
                mail: mailInput,
                password: passwordInput,
                passwordConfirm: repeatedPasswordInput
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
        return Object.create({
            headers: {
                Authorization: localStorage.getItem('Authorization'),
                Username: localStorage.getItem('user')
            }
        });
    }
}

export default new AuthService();