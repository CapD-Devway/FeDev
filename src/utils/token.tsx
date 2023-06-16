import { getAuth } from "firebase/auth";

export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

export const getToken= ():string =>{
    const auth = getAuth();
    auth.onIdTokenChanged(function (user){
        if(user){
            user.getIdToken().then((token)=>{setToken(token)})
        }
    })
    const token= localStorage.getItem('token')?? ""
    return token;
}
